import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
    const colorLinks = Object.keys(colors).map((colorName) => (
        <p key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </p>
    ));

    return (
         <div className='ColorList'>
            <header className='ColorList-header'>
                <h1>The Color Factory</h1>
                <h2>Select a Color</h2>
            </header>
            <h4>{colorLinks}</h4>
            <br></br>
            <hr></hr>
            <br></br>
            <div className='ColorList-add'>
                <Link to="/colors/new">Add a color to the list!</Link>
            </div>
        </div>
    );
}

export default ColorList;