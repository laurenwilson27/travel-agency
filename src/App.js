// import "./App.css";

import HeaderButton from "./components/HeaderButton";
import HomePage from "./components/HomePage";
import ResortsPage from "./components/ResortsPage";
import BookingPage from "./components/BookingPage";

import { useState } from "react";
import Footer from "./components/Footer";

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

  // const toBookingPage = () => setPage("booking");

  // const toResortsPage = () => setPage("resorts");

  // const toHomePage = () => setPage("home");

  return (
    <div className="App">
      <header>
        <HeaderButton label="Book a Trip" onClick={() => setPage("booking")} />
        <HeaderButton label="Destinations" onClick={() => setPage("resorts")} />
        <HeaderButton label="Home" onClick={() => setPage("home")} />
        <div className="headerbox">
          <div className="agencyname">
            <h1>Fun-wing Vacations</h1>
          </div>
        </div>
      </header>
      {getPage()}
      <Footer />
    </div>
  );
}

export default App;
