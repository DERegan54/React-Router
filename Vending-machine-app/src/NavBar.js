import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/trailMix">Trail Mix</NavLink>
            <NavLink exact to="/fruitLeather">Fruit Leather</NavLink>
            <NavLink exact to="/pretzels">Pretzels</NavLink>
        </nav>
    );
}

export default NavBar;