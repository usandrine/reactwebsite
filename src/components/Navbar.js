import React, { useState, useEffect } from "react";
import logo from "../assets/pizzalogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when window resizes above 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Navbar">
      <div className="LeftSide">
        <img src={logo} alt="Pizza Logo" />
        <div className={`hiddenLinks ${menuOpen ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="RightSide">
        {/* Show navigation links only on larger screens */}
        {!menuOpen && (
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
        {/* Menu button for small screens */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

