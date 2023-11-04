import React from "react";

const Footer = () => {
  return (
    <footer className="flexfoot">
      <div className="cornerboxleft">
        <h3>Fun-wing Vacations</h3>
        <p>123 Travel St.</p>
        <p>St. John'n's, NL A1A 1A1</p>
        <p>709-555-5555</p>
      </div>

      <div className="companybox">
        <p>
          <span className="fontxx">Fun-wing Vacations</span>
        </p>
        <p>Serving Newfoundland and Labrador since 2013</p>
        <p>Your trusted source for travel!</p>
      </div>

      <div className="cornerboxright">
        <h3>Hours of Operation</h3>
        <p>Mon-Fri: 9am-4pm</p>
        <p>Sat: 10am-4pm</p>
        <p>Sun: Closed</p>
      </div>
    </footer>
  );
};

export default Footer;
