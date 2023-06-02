import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DisplayColor = ({ colors }) => {
    const {color} = useParams();

    return (
        <div className="DisplayColor-container">
            <h1>{color}</h1>
            <div className="DisplayColor" style={{backgroundColor: colors[color]}}></div>
            <br></br>
            <Link to='/colors'>Go Back to the Color List</Link>
        </div>
    );
}

export default DisplayColor;