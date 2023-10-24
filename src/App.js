import "./App.css";

import HeaderButton from "./components/HeaderButton";
import HomePage from "./components/HomePage";
import ResortsPage from "./components/ResortsPage";
import BookingPage from "./components/BookingPage";

import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const getPage = () => {
    let result;
    switch (page) {
      case "resorts":
        result = <ResortsPage />;
        break;
      case "booking":
        result = <BookingPage />;
        break;
      default:
        result = <HomePage />;
    }
    return result;
  };

  const toBookingPage = () => setPage("booking");

  const toResortsPage = () => setPage("resorts");

  const toHomePage = () => setPage("home");

  return (
    <div className="App">
      <div style={{ backgroundColor: "#000", color: "#fff" }}>
        Logo and stuff
        <HeaderButton label="Home" onClick={toHomePage} />
        <HeaderButton label="Destinations" onClick={toResortsPage} />
        <HeaderButton label="Book a Trip" onClick={toBookingPage} />
      </div>
      {getPage()}
    </div>
  );
}

export default App;
