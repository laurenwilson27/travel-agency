import React from "react";
import { useState } from "react";

const ResortTile = ({ name, photo, desc }) => {
  // const [descIsVisible, setDescVisible] = useState(false);

  return (
    <div className="resortbox">
      <img src={photo} alt={name} />
      <div className="resortdescbox">
        <h4>{name.toUpperCase()}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ResortTile;
