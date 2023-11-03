import React from "react";

const ResortTile = ({ name, photo, desc, gotoBookResort, price }) => {
  // const [descIsVisible, setDescVisible] = useState(false);

  return (
    <div className="resortbox">
      <img src={photo} alt={name} />
      <div className="resortdescbox">
        <h4>{name.toUpperCase()}</h4>
        <p>{desc}</p>
        <p>${price.toFixed(2)} PP based on double occupancy.</p>
      </div>
      <div className="resortbutton" onClick={gotoBookResort}>
        Book Now!
      </div>
    </div>
  );
};

export default ResortTile;
