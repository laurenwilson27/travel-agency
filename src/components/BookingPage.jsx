import React from "react";

const BookingPage = () => {
  return (
    <>
      <main>
        <form className="flexmain">
          <div className="bookingboxsmall">
            <p>
              <label htmlFor="destinationbox">Destination:</label>
              <input type="text" id="destinationbox" />
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
