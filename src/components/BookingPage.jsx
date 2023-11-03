import React from "react";
import { useState } from "react";

const BookingPage = ({ resorts, defaultResort }) => {
  // Generate a list of every resort option from the provided resorts parameter
  // In the process, also determine the defaultOption by comparing the defaultResort parameter
  let defaultOption = "Select a resort...";
  let resortList = [<option key={0}>Select a resort...</option>];
  resortList.push(
    resorts.map((resort, index) => {
      if (index + 1 === defaultResort) defaultOption = resort.name;
      return <option key={index + 1}>{resort.name}</option>;
    })
  );

  let expMonths = [...Array(12)].map((x, index) => {
    return <option key={index}>{index + 1}</option>;
  });

  let expYears = [...Array(8)].map((x, index) => {
    return <option key={index}>{24 + index}</option>;
  });

  // Create a state variable and function to keep track of the inputs
  const [inputs, setInputs] = useState({
    custDestination: defaultOption,
    custPeople: "2",
    custCardExpMonth: "1",
    custCardExpYear: "24",
  });

  const inputChanged = (e) => {
    setInputs((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    // Note: The form will still perform the default 'submit' action, causing a reload of the app
    // This can be avoided eith e.preventDefault(), but works fine for this page
    alert(
      `Thank you for booking a vacation with Fun-wing, ${inputs.custName}!\nA confirmation email will be sent to ${inputs.custEmail}`
    );
    // (A confirmation email is not actually sent, of course.)
  };

  return (
    <>
      <div className="sloganbox">
        <h1>Your gateway to fun in the sun!</h1>
      </div>
      <main>
        <form className="flexmain" onSubmit={handleSubmit}>
          <div className="bookingboxsmall">
            <p>
              <label htmlFor="destinationbox">Destination:</label>
              <select
                name="custDestination"
                id="destination"
                className="inputbox"
                defaultValue={defaultOption}
                onChange={inputChanged}
              >
                {resortList}
              </select>
            </p>

            <p>
              <label htmlFor="peoplebox">Number of people:</label>
              <select
                name="custPeople"
                id="peoplebox"
                defaultValue={inputs.custPeople || "2"}
                onChange={inputChanged}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </p>
          </div>

          <div className="bookingboxlarge">
            <p>
              <label htmlFor="namebox">Name:</label>
              <input
                type="text"
                name="custName"
                id="namebox"
                className="inputbox"
                onChange={inputChanged}
              />
            </p>
            <p>
              <label htmlFor="emailbox">Email:</label>
              <input
                type="text"
                name="custEmail"
                id="emailbox"
                className="inputbox"
                onChange={inputChanged}
              />
            </p>
            <p>
              <label htmlFor="addrbox">Address:</label>
              <input
                type="text"
                name="custAddress"
                id="addrbox"
                className="inputbox"
                onChange={inputChanged}
              />
            </p>
            <p>
              <label htmlFor="phonebox">Phone:</label>
              <input
                type="number"
                name="custPhone"
                id="pbonebox"
                className="inputbox"
                onChange={inputChanged}
              />
            </p>
            <p>
              <label htmlFor="cardbox">Card #:</label>
              <input
                type="number"
                name="custCard"
                id="cardbox"
                className="inputbox"
                onChange={inputChanged}
              />
            </p>
            <p>
              <label htmlFor="expmonth">Exp Month:</label>
              <select
                name="custCardExpMonth"
                id="expmonth"
                className="expirybox"
                onChange={inputChanged}
              >
                {expMonths}
              </select>
              <label htmlFor="expyear">Exp Year:</label>
              <select
                name="custCardExpYear"
                id="expyear"
                className="expirybox"
                onChange={inputChanged}
              >
                {expYears}
              </select>
            </p>
            <p>
              <input id="submitButton" type="submit" />
            </p>
          </div>
        </form>
      </main>
    </>
  );
};

export default BookingPage;
