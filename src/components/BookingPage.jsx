import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BookingPage = ({ resorts }) => {
  const params = useParams();
  let defaultResort = Number(params.defaultResort);

  // Generate a list of every resort option from the provided resorts parameter
  // In the process, also determine the defaultOption by comparing the defaultResort parameter
  let defaultOption = "Select a resort...";
  let resortList = [<option key={0}>Select a resort...</option>];
  resortList.push(
    resorts.map((resort) => {
      if (resort.id === defaultResort) defaultOption = resort.name;
      return <option key={resort.id}>{resort.name}</option>;
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputs.custDestination != "Select a resort...") {
      //Send a request to the json-server
      let res = await fetch("http://localhost:7000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
      let data = await res.json();

      alert(
        `Thank you for booking with Fun-wing Vacations! Your booking ID is ${data.id}`
      );

      setInputs({
        custDestination: defaultOption,
        custPeople: "2",
        custCardExpMonth: "1",
        custCardExpYear: "24",
      });
    } else alert("You must select a resort!");
  };

  // Creates text notifying the user of the price of the currently selected resort and person combination
  const lookupBookingCost = () => {
    let result = resorts.find(
      (resort) => resort.name === inputs.custDestination
    );

    if (result) {
      let calcPrice;
      switch (inputs.custPeople) {
        case "1":
          calcPrice = result.price * 0.7;
          break;
        case "3":
          calcPrice = result.price * 1.3;
          break;
        case "4":
          calcPrice = result.price * 1.6;
          break;
        default:
          // The prices in the resorts list are based on a two-person trip, so they are the default
          calcPrice = result.price;
      }
      return (
        <span className="bookingCost">
          The cost of this trip will be{" "}
          <span className="bookingCostPrice">${calcPrice.toFixed(2)}</span>.
        </span>
      );
    } else return null;
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
            <div>{lookupBookingCost()}</div>
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
