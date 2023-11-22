import HeaderButton from "./components/HeaderButton";
import HomePage from "./components/HomePage";
import ResortsPage from "./components/ResortsPage";
import BookingPage from "./components/BookingPage";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import photo1 from "./components/images/OceanBreezes.webp";
// import photo2 from "./components/images/OnTheSea.webp";
// import photo3 from "./components/images/TropicalOasis.webp";
// import photo4 from "./components/images/LapOfLuxury.webp";
// import photo5 from "./components/images/AmongThePalms.webp";
// import photo6 from "./components/images/CoolVibesResort.webp";
import logo from "./components/images/FWlogo.jpg";

function App() {
  const [resorts, setResorts] = useState([]);

  // On first render, get the resorts from our API
  useEffect(() => {
    const getResorts = async () => {
      let request = await fetch("http://localhost:7000/resorts");
      let data = await request.json();

      console.log(data);
      setResorts(data);
    };

    getResorts();
  }, []);

  return (
    <div className="App">
      <Router>
        <header>
          <div className="headerbox">
            <div className="logobox">
              <img className="logo" src={logo} alt="Fun-wing Logo" />
            </div>
            <div className="agencyname">
              <h1>Fun-wing Vacations</h1>
            </div>
            <div className="flexnav">
              <HeaderButton label="Book a Trip" target="/booking" />
              <HeaderButton label="Destinations" target="/resorts" />
              <HeaderButton label="Home" target="/" />
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/booking" element={<BookingPage resorts={resorts} />} />
          <Route
            path="/booking/:defaultResort"
            element={<BookingPage resorts={resorts} />}
          />
          {/* <Route path="/booking" element={<BookingPage resorts={resorts} />} /> */}
          <Route path="/resorts" element={<ResortsPage resorts={resorts} />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
