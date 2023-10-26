import React from "react";
import { useState } from "react";

const ResortTile = ({ name, photo, desc }) => {
  const [descIsVisible, setDescVisible] = useState(false);

  return (
    <div className="resortTile">
      <h2>{name}</h2>
      <img style={{ width: "200px" }} src={photo} alt="A tropical resort" />
      <br />
      {descIsVisible ? (
        <>
          <button
            onClick={() => {
              setDescVisible(false);
            }}
          >
            Hide
          </button>
          <p style={{ width: "200px" }}>{desc}</p>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setDescVisible(true);
            }}
          >
            Description
          </button>
        </>
      )}
    </div>
  );
};

export default ResortTile;
