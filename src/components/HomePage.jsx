import React from "react";

import agent from "./images/agent.webp";
import hotdeal from "./images/hotdeal.webp";

const FrontPage = ({ gotoBookResort }) => {
  return (
    <>
      <main>
        <div className="sloganbox">
          <h1>Fun-wing Vacations - Your gateway to fun in the sun!</h1>
        </div>
        <div className="flexmain">
          <div className="aboutus">
            <h2>Fun-wing Vacations</h2>
            <p>
              Established in 2013, Fun-wing has been the go-to travel agency in
              downtown St. John's for over 10 years. Our goal is always to make
              our customers happy. Because a happy customer is a return
              customer. Contact us for all your travel needs.
            </p>
            <img src={agent} id="agentimg" alt="Travel agent" width="300px" />
          </div>
          <div className="dealsbox">
            <div className="resortpicbox">
              <h2>HOT DEAL!!!</h2>
              <img src={hotdeal} id="dealpic" alt="Paradise Sky Resort" />
            </div>
            <div className="resortdescbox">
              <h4>PARADISE SKY RESORT</h4>
              <p>
                Hot Deal! Let your worries melt away at Paradise Sky Resort.
                With 400 rooms, 4 restaurants, 3 bars, 3 pools and spa services,
                you can relax an recharge. Don't miss out on this amazing deal!
              </p>
              <p>$999.00 PP based on double occupancy</p>
              <div className="resortbutton" onClick={() => gotoBookResort(7)}>
                Book Now!
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FrontPage;
