import React from "react";
import { Link } from "react-router-dom";

const ResortTile = ({ id, name, photo, desc, price }) => {
  // const [descIsVisible, setDescVisible] = useState(false);

  return (
    <div className="resortbox">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className="resortdescbox">
        <h4>{name.toUpperCase()}</h4>
        <p>{desc}</p>
        <p>${price.toFixed(2)} PP based on double occupancy.</p>
      </div>

      <Link to={`/booking/${id}`}>
        <div className="resortbutton">Book Now!</div>
      </Link>
    </div>
  );
};

export default ResortTile;
