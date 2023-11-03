import React from "react";
import ResortTile from "./ResortTile";

const ResortsPage = ({ resorts, gotoBookResort }) => {
  return (
    <div className="flexmainresort">
      {resorts.map((resort, index) => {
        if (resort.listed)
          return (
            <ResortTile
              key={index}
              name={resort.name}
              photo={resort.photo}
              desc={resort.desc}
              price={resort.price}
              gotoBookResort={() => gotoBookResort(index + 1)}
            />
          );
        else return null;
      })}
    </div>
  );
};

export default ResortsPage;
