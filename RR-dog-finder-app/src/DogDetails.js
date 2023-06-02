import React from 'react';
import { Redirect } from "react-router-dom";

const DogDetails = ({dog}) => {
    if(!dog) return <Redirect to="/dogs" />
    return (
        <div className="DogDetails">
            <img src={dog.src} alt={dog.name} />
            <h3>Name: {dog.name}, Age: {dog.age}</h3>
            <p>{dog.facts.map((fact, idx) => (
                <div key={idx}>{fact}</div>
            ))}
            </p>
        </div>
    );
}

export default DogDetails;