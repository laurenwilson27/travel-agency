import React from "react";
import { useState } from "react";

const ResortTile = ({ name, photo, desc }) => {
  return (
    <div className="resortTile">
      <h2>{name}</h2>
      <img style={{ width: "200px" }} src={photo} alt="A tropical resort" />
    </div>
  );
};

export default ResortTile;
