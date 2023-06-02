import React from 'react';
import { Link } from 'react-router-dom';


const DogList = ({dogs}) => {
    return (
        <div className="DogList">
            <h1>DOG FINDER</h1>
            <h2>Click on a dog for more info!</h2>
            <div className="DogList-images">
                {dogs.map(dog => (
                    <div key={dog.name}>
                        <img src={dog.src} alt={dog.name} />
                        <h2>
                            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                        </h2>
                        <br></br><br></br>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;