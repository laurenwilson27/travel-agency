import HeaderButton from "./components/HeaderButton";
import HomePage from "./components/HomePage";
import ResortsPage from "./components/ResortsPage";
import BookingPage from "./components/BookingPage";
import Footer from "./components/Footer";

import { useState } from "react";

import photo1 from "./components/images/OceanBreezes.webp";
import photo2 from "./components/images/OnTheSea.webp";
import photo3 from "./components/images/TropicalOasis.webp";
import photo4 from "./components/images/LapOfLuxury.webp";
import photo5 from "./components/images/AmongThePalms.webp";
import photo6 from "./components/images/CoolVibesResort.webp";
import logo from "./components/images/FWlogo.jpg";

function App() {
  const [page, setPage] = useState("home");
  const [defaultResort, setDefaultResort] = useState(0);

  // Resorts list used by the Resorts page and Booking page
  const resorts = [
    {
      name: "Ocean Breeze Resort",
      photo: photo1,
      desc: "Enjoy the soothing ocean breeze as you relax by the pool with a delicious cocktail.  Our 350 room resort includes 2 pools, 4 restaurants, 5 bars, activity center, and spa area.  We offer 5 start accommodations and service that is second to none.",
      // If listed is true, this resort will be shown on the Resorts page
      listed: true,
      price: 1500.0,
    },
    {
      name: "Tranquil Waters Resort",
      photo: photo2,
      desc: "With 15 over the water bungalows as well as 40 bungalows on land you will experience the ultimate luxury experience with butler service for whatever you desire.  No need to leave your private sanctuary unless you choose.  Our resort offers 1 bar, 2 restaurants, and 1 pool for your enjoyment as well as spa services, tennis courts, and access to several watercraft for your pleasure.",
      listed: true,
      price: 2700.0,
    },
    {
      name: "Tropical Oasis Resort",
      photo: photo3,
      desc: "With 560 rooms this family resort is always bustling with activity.  3 pools and a lazy river host several programs for kids and teens daily.  Our waterslide is fun for all ages.  Guests of all ages can partake in our sports activities.  Our 7 restaurants provide a wide range of choices for all tastes.  Our 4 bars are kid friendly with non-alcoholic mocktails as well as a variety of ice creams choices.",
      listed: true,
      price: 1700.0,
    },
    {
      name: "Lap of Luxury Resort",
      photo: photo4,
      desc: "You will want for nothing at this amazing location designed with luxury in mind.  Our Spa services are second to none. We provide private butler service to your suite, and your own designated cabana bed. With 100 suites, 4 pools, 4 restaurants and 3 bars we offer you an amazingly luxurious vacation.",
      listed: true,
      price: 2900.0,
    },
    {
      name: "Among the Palms Resort",
      photo: photo5,
      desc: "This family friendly resort had tons of fun for all ages.  400 Rooms with 3 pools, 6 bars, 5 restaurants and daily entertainment for both kids adults.  Our kids program provides supervised activities to keep your kids busy all day.   For teens there is a games room, basketball court, beach volleyball and movie nights as well as supervised water sports.  Adults can enjoys some stress free time knowing their kids are safe and having fun.",
      listed: true,
      price: 1600.0,
    },
    {
      name: "Cool Vibes Resort",
      photo: photo6,
      desc: "This adults only resort offers and exciting nightlife with live music and dance parties each night in each of our 3 discos.  With 600 rooms there is so much party potential.  During the day relax in one of our 3 pools or head to the beach for  kayaking, Sea-Doo rides or our daily catamaran excursion.",
      listed: true,
      price: 1800.0,
    },
    {
      name: "Paradise Sky Resort 🔥 HOT DEAL",
      photo: null,
      desc: "",
      listed: false,
      price: 990.0,
    },
  ];

  // Returns JSX based on the app's 'page' state
  const getPage = () => {
    let result;
    switch (page) {
      case "resorts":
        result = (
          <ResortsPage resorts={resorts} gotoBookResort={gotoBookResort} />
        );
        break;
      case "booking":
        result = (
          <BookingPage resorts={resorts} defaultResort={defaultResort} />
        );
        break;
      default:
        result = <HomePage gotoBookResort={gotoBookResort} />;
    }
    return result;
  };

  // Functions which set the app's page and defaultResort stages as appropriate
  const gotoBookResort = (resort) => {
    setDefaultResort(resort);
    setPage("booking");
  };

  const toBookingPage = () => {
    setDefaultResort(0);
    setPage("booking");
  };

  const toResortsPage = () => {
    setDefaultResort(0);
    setPage("resorts");
  };

  const toHomePage = () => {
    setDefaultResort(0);
    setPage("home");
  };

  return (
    <div className="App">
      <header>
        <div className="headerbox">
          <div className="logobox">
            <img className="logo" src={logo} alt="Fun-wing Logo" />
          </div>
          <div className="agencyname">
            <h1>Fun-wing Vacations</h1>
          </div>
          <div className="flexnav">
            <HeaderButton label="Book a Trip" onClick={() => toBookingPage()} />
            <HeaderButton
              label="Destinations"
              onClick={() => toResortsPage()}
            />
            <HeaderButton label="Home" onClick={() => toHomePage()} />
          </div>
        </div>
      </header>
      {getPage()}
      <Footer />
    </div>
  );
}

export default App;
