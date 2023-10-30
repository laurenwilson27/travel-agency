import React from "react";
import ResortTile from "./ResortTile";

const ResortsPage = ({ resorts, gotoBookResort }) => {
  return (
    <div className="flexmainresort">
      {resorts.map((resort, index) => {
        return (
          <ResortTile
            key={index}
            name={resort.name}
            photo={resort.photo}
            desc={resort.desc}
            gotoBookResort={() => gotoBookResort(index + 1)}
          />
        );
      })}
    </div>
  );
};

export default ResortsPage;
