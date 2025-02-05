import React from "react";
import "../styles/Menu.css";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div
        className="menuItemImage"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "180px",
          width: "100%",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      ></div>
      <div className="info">
        <h3>{name}</h3>
        <p>{price} Frw</p>
      </div>
    </div>
  );
}

export default MenuItem;
