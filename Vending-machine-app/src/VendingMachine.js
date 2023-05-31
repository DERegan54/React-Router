import React from "react";
import { Link } from "react-router-dom"

// VENDING_MACHINE_IMAGE_URL = "https://c8.alamy.com/comp/EN3WJ2/different-currencies-in-a-vending-machine-EN3WJ2.jpg"

const VendingMachine = () => {
    return (
        <div className="Home">
            <h1>SNACK ATTACK!!!</h1>
            <img 
                src="https://media.istockphoto.com/id/533727796/photo/vending-machine.jpg?s=612x612&w=is&k=20&c=pgB-Ce2qKEoHpYpD3cKIzeMrddERN7G48Qvx7LJoRoQ="
                alt="vending machine"
            />
            <ul className="SnackList">
                <li><Link to="/trailmix">Trail Mix</Link></li>
                <li><Link to="/fruitleather">Fruit Leather</Link></li>
                <li><Link to="/pretzels">Pretzels</Link></li>
            </ul>
        </div>
    ); 
}

export default VendingMachine;