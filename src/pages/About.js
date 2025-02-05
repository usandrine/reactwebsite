import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="About">
        <div 
           className="aboutTop"
           style={{ backgroundImage: `url(${MultiplePizzas})` }}
        >
          
          
        </div>
        <div className="aboutBottom">
          <h1> ABOUT US</h1>
          <p>
          Founded in 2025, our pizzeria started as a small family business with a passion for creating the most delicious, handcrafted pizzas. We believe in using the freshest ingredients and traditional recipes to bring a slice of happiness to your table.
          </p>
        </div>
    </div>
  );
}

export default About;
