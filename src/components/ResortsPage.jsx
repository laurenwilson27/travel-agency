import React from "react";
import ResortTile from "./ResortTile";

const ResortsPage = ({ resorts, gotoBookResort }) => {
  return (
    <div className="flexmainresort">
      {resorts.map((resort) => {
        return resort.listed ? (
          <ResortTile
            key={resort.id}
            id={resort.id}
            name={resort.name}
            photo={resort.photo}
            desc={resort.desc}
            price={resort.price}
          />
        ) : null;
      })}
    </div>
  );
};

export default ResortsPage;
