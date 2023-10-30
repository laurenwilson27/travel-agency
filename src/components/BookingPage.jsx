import React from "react";

const BookingPage = ({ resorts, defaultResort }) => {
  // Generate a list of every resort option from the provided resorts parameter
  // In the process, also determine the defaultOption by comparing the defaultResort parameter
  let defaultOption = "Select a resort...";
  let resortList = [<option>Select a resort...</option>];
  resortList.push(
    resorts.map((resort, index) => {
      if (index + 1 === defaultResort) defaultOption = resort.name;
      return <option key={index}>{resort.name}</option>;
    })
  );

  return (
    <>
      <div className="sloganbox">
        <h1>Your gateway to fun in the sun!</h1>
      </div>
      <main>
        <form className="flexmain">
          <div className="bookingboxsmall">
            <p>
              <label htmlFor="destinationbox">Destination:</label>
              <select
                name="desination"
                id="destination"
                className="inputbox"
                defaultValue={defaultOption}
              >
                {resortList}
              </select>
            </p>

            <p>
              <label htmlFor="peoplebox">Number of people:</label>
              <input type="text" id="peoplebox" />
            </p>
          </div>

          <div className="bookingboxlarge">
            <p>
              <label htmlFor="namebox">Name:</label>
              <input type="text" id="namebox" className="inputbox" />
            </p>
            <p>
              <label htmlFor="addrbox">Address:</label>
              <input type="text" id="addrbox" className="inputbox" />
            </p>
            <p>
              <label htmlFor="phonebox">Phone:</label>
              <input type="text" id="pbonebox" className="inputbox" />
            </p>
            <p>
              <label htmlFor="cardbox">Card #:</label>
              <input type="text" id="cardbox" className="inputbox" />
            </p>
            <p>
              <label htmlFor="expmonth">Exp Month:</label>
              <input type="text" id="expmonth" className="expirybox" />
              <label htmlFor="expyear">Exp Year:</label>
              <input type="text" id="expyear" className="expirybox" />
            </p>
            <p></p>
            <p></p>
          </div>
        </form>
      </main>
    </>
  );
};

export default BookingPage;
