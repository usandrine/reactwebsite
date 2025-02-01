import React from 'react'
import logo from "../assets/pizzalogo.png";
import { Link } from "react-router-dom"; 
import "../styles/Navbar.css";
 
function Navbar() {
  return (
    <div classname="Navbar">
        <div classname="LeftSide">
            <img src={logo} />
            </div>
        <div classname="RightSide">
            <Link to="/"> Home</Link>
            <Link to="/"> Menu</Link>
            <Link to="/"> About</Link>
            <Link to="/"> Contact</Link>
        </div>
    </div>
  );
}

export default Navbar;
