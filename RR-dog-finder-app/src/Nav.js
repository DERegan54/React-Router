import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({dogs}) => {
    const dogLinks = dogs.map(dog => (
        <span><Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></span>
    ));

    return (
       <nav className="Nav">
            <Link exact to="/dogs">Home</Link>
            {dogLinks}
        </nav>
    );
}

export default Nav;