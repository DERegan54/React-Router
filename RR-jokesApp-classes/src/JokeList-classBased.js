import React, {Component} from 'react';
import axios from 'axios';
import Joke from './Joke-classBased';
import './JokeList.css';

class JokeList extends Component {
    // Setting default number of jokes to fetch at each API call
    static defaultProps = {
        jokesToFetch: 10
    };
    // Setting state to an empty array for the jokes to be stored in 
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        };
        // Binding this to the correct methods so that this doesn't change
        this.getNewJokes = this.getNewJokes.bind(this);
        this.resetVotes = this.resetVotes.bind(this);
        this.toggleLock = this.toggleLock.bind(this);
        this.vote = this.vote.bind(this);
    }
    // When the application first mounts, make API call
    componentDidMount() {
        if (this.state.jokes.length < this.props.jokesToFetch) this.getJokes();
    }
    // On updates, make API call
    componentDidUpdate() {
        if (this.state.jokes.length < this.props.jokesToFetch) this.getJokes();
    }
    // Code for API call
    async getJokes() {
        try {
            // defining jokes as the jokes in state when API call is made, loading one-by-one
            let jokes = this.state.jokes;
            // initializing jokeVotes to either what is in localStorage, or to an 
            // empty object if there are no votes in localStorage
            let jokeVotes = JSON.parse(
                window.localStorage.getItem("jokeVotes") || '{}'
            );
            // defining the jokes already displayed on page as a new set, mapping 
            //the jokes into the set with their ids
            let displayedJokes = new Set(jokes.map(j => j.id));
            // while the number of jokes in the jokes array is less than the number 
            // set for jokes to fetch in default props, make a call to API
            while(jokes.length < this.props.jokesToFetch) {
                let response = await axios.get("https://icanhazdadjoke.com", {
                    headers: { Accept: "application/json" }
                });
                // destructure response.data to gain access to status and joke
                let { status, ...joke } = response.data;
                // if the ids of the jokes fetched are not in the jokesDisplayed Set
                if(!displayedJokes.has(joke.id)) {
                    // add the id to the set
                    displayedJokes.add(joke.id);
                    // If there are votes in the JokeVotes object for that id, store it,
                    // or initialize jokeVotes to zero if there are no votes yet
                    jokeVotes[joke.id] = jokeVotes[joke.id] || 0;
                    // push the jokes, the votes and status to the jokes array
                    jokes.push({ ...joke, votes: jokeVotes[joke.id], locked: false });
                } else {
                    console.log("Joke already displayed");
                }
            }
            // Update state with the new jokes fetched
            this.setState({ jokes });
            // Store the votes for the jokes just fetched in localStorage
            window.localStorage.setItem('jokeVotes', JSON.stringify(jokeVotes));
        } catch (err) {
            console.log(err);
        }
    }
    // Method that gets jokes from the API call that have not yet been displayed (locked)
    getNewJokes() {
        this.setState(state => ({ jokes: state.jokes.filter(joke => joke.locked)}));
    }
    // Method that sets the jokeVotes back to empty
    resetVotes () {
        window.localStorage.setItem("jokeVotes", "{}");
        this.setState(state => ({
            jokes: state.jokes.map(joke => ({ ...joke, votes: 0}))
        }));
    }
    // Method that allows user to vote on a joke and either adding or subtracting a vote (difference)
    vote(id, difference) {
        // defining jokeVotes as the current votes in localStorage
        let jokeVotes = JSON.parse(window.localStorage.getItem("jokeVotes"));
        // Adds a joke id and vote value to the jokeVotes object
        jokeVotes[id] = (jokeVotes[id] || 0) + difference;
        // Saving updated jokeVotes object to localStorage
        window.localStorage.setItem('jokeVotes', JSON.stringify(jokeVotes));
        // Updating state to include the new votes on the joke id
        this.setState(st => ({
            jokes: st.jokes.map(j => 
                j.id === id ? { ...j, votes: j.votes + difference } : j
            )
        }));
    }
    // Method that toggles between jokes by locking/unlocking them
    toggleLock(id) {
        this.setState(st => ({
            jokes: st.jokes.map(j => (j.id === id ? { ... j, locked: !j.locked } : j))
        }));
    }
    // rendering either a spinner to indicate loading or a list of jokes sorted by votes
    render () {
        // Defines sorted jokes as jokes sorted by votes
        let sortedJokes = [...this.state.jokes].sort((a, b) => b.votes - a.votes);
        let allLocked = 
            sortedJokes.filter(j => j.locked).length === this.props.jokesToFetch;

        return (
            <div className="JokeList">
                <button
                    className="JokeList-getJokes"
                    onClick={this.getNewJokes}
                    disabled={allLocked}
                >
                    Get New Jokes
                </button>
                <button className="JokeList-getJokes" onClick={this.resetVotes}>
                    Reset Vote Counts
                </button>

                {sortedJokes.map(j => (
                    <Joke
                        text={j.joke}
                        key={j.id}
                        id={j.id}
                        votes={j.votes}
                        vote={this.vote}
                        locked={j.locked}
                        toggleLock={this.toggleLock}
                    />
                ))}

                {sortedJokes.length < this.props.jokesToFetch ? (
                    <div className='loading'>
                        <i className="fax fa-4x fa-spinner fa-spin" />
                    </div>
                ) : null}
            </div>
        );
    }
} 


export default JokeList;