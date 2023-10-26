import React from "react";
import ResortTile from "./ResortTile";

import photo1 from "./Images/OceanBreezes.jpg";
import photo2 from "./Images/OnTheSea.jpg";
import photo3 from "./Images/TropicalOasis.jpg";
import photo4 from "./Images/LapOfLuxury.jpg";
import photo5 from "./Images/AmongThePalms.jpg";
import photo6 from "./Images/CoolVibesResort.jpg";

/*// Description page - pics + buttons that hide/show description.

import "./App.css";
import "./index.js";

function App() {
  const descr1Click = () => {
    const text =
      "Enjoy the soothing ocean breeze as you relax by the pool with a delicious cocktail. Our 350 room resort includes 2 pools, 4 restaurants, 5 bars, an activity center, and spa area. We offer 5 star accommodations and service that is second to none.\r\r$1500.00 PP based on double occupancy";

    const pElement = document.getElementById("b1");
    let hide;

    if (pElement.innerText === "") {
      pElement.innerText = text;
      hide = document.getElementById("butt1");
      hide.innerText = "Hide";
    } else {
      pElement.innerText = "";
      hide = document.getElementById("butt1");
      hide.innerText = "Description";
    }
  };

  const descr2Click = () => {
    const text =
      "With 15 over-the-water bungalows as well as 40 on-land bungalows, Tranquil Waters Resort offers a truly luxurious experience. No need to leave your private sanctuary. We offer around-the-clock butler service for whatever your heart desires. Our resort offers 1 bar, 2 restaurants, and 1 pool for your enjoyment as well as spa services, tennis courts, and access to various watercrafts for your pleasure.\r\r$2700 PP based on double occupancy.";

    const pElement = document.getElementById("b2");
    let hide;

    if (pElement.innerText === "") {
      pElement.innerText = text;
      hide = document.getElementById("butt2");
      hide.innerText = "Hide";
    } else {
      pElement.innerText = "";
      hide = document.getElementById("butt2");
      hide.innerText = "Description";
    }
  };

  const descr3Click = () => {
    const text =
      "With 560 rooms, this family resort is always bustling with activity.  3 pools and a lazy river host several programs for kids and teens daily. Our waterslide is fun for all ages. Guests of all ages can partake in our sports activities. There is a childcare center on site so parents can enjoy some much-needed free time. Our 7 restaurants provide a wide range of choices for all tastes. Along with our 4 bars, there is also a dedicated non-alcoholic children's bar where kids of all ages can enjoy kid-appropriate mocktails as well as a variety of ice cream choices.\r\r$1700.00 PP based on double occupancy.";

    const pElement = document.getElementById("b3");
    let hide;

    if (pElement.innerText === "") {
      pElement.innerText = text;
      hide = document.getElementById("butt3");
      hide.innerText = "Hide";
    } else {
      pElement.innerText = "";
      hide = document.getElementById("butt3");
      hide.innerText = "Description";
    }
  };

  const descr4Click = () => {
    const text =
      "You will want for nothing at this amazing location designed with luxury in mind. Our Spa services are second to none. We provide private butler service to your suite, and your own designated cabana bed. With 100 suites, 4 pools, 4 restaurants and 3 bars we offer you an amazingly luxurious vacation.\r\r$2900 PP based on double occupancy.";

    const pElement = document.getElementById("b4");
    let hide;

    if (pElement.innerText === "") {
      pElement.innerText = text;
      hide = document.getElementById("butt4");
      hide.innerText = "Hide";
    } else {
      pElement.innerText = "";
      hide = document.getElementById("butt4");
      hide.innerText = "Description";
    }
  };

  const descr5Click = () => {
    const text =
      "This family friendly resort has tons of fun for all ages. 400 Rooms with 3 pools, 6 bars, 5 restaurants and daily entertainment for both kids and adults. Our kids program provides supervised activities to keep your kids busy all day. For teens there is a games room, basketball court, beach volleyball and movie nights as well as supervised water sports. Adults can enjoy some stress free time knowing their kids are safe and having fun.\r\r$1600 PP based on double occupancy.";

    const pElement = document.getElementById("b5");
    let hide;

    if (pElement.innerText === "") {
      pElement.innerText = text;
      hide = document.getElementById("butt5");
      hide.innerText = "Hide";
    } else {
      pElement.innerText = "";
      hide = document.getElementById("butt5");
      hide.innerText = "Description";
    }
  };

  const descr6Click = () => {
    const text =
      "This adult-only resort offers an exciting nightlife with live music and dance parties every night in each of our 3 discos. With 600 rooms there is so much party potential. During the day relax in one of our 3 pools or head to the beach for  kayaking, Sea-Doo rides or our daily catamaran excursion.\r\r$1800 PP based on double occupancy.";

    const pElement = document.getElementById("b6");
    let hide;

    if (pElement.innerText === "") {
      pElement.innerText = text;
      hide = document.getElementById("butt6");
      hide.innerText = "Hide";
    } else {
      pElement.innerText = "";
      hide = document.getElementById("butt6");
      hide.innerText = "Description";
    }
  };

  return (
    <div>
      <body>
        <div id="blurb1">
          <h2>Ocean Breeze Resort</h2>
          <img src={logo1} className="App-logo" alt="Pic1" />
          <br></br>
          <button onClick={descr1Click} className="button-class" id="butt1">
            Description
          </button>
          <p id="b1"></p>
        </div>

        <div id="blurb2">
          <h2>Tranquil Waters Resort</h2>
          <img src={logo2} className="App-logo" alt="Pic2" />
          <br></br>
          <button onClick={descr2Click} className="button-class" id="butt2">
            Description
          </button>
          <p id="b2"></p>
        </div>

        <div id="blurb3">
          <h2>Tropical Oasis Resort</h2>
          <img src={logo3} className="App-logo" alt="Pic3" />
          <br></br>
          <button onClick={descr3Click} className="button-class" id="butt3">
            Description
          </button>
          <p id="b3"></p>
        </div>

        <div id="blurb4">
          <h2>Lap of Luxury Resort</h2>
          <img src={logo4} className="App-logo" alt="Pic4" />
          <br></br>
          <button onClick={descr4Click} className="button-class" id="butt4">
            Description
          </button>
          <p id="b4"></p>
        </div>

        <div id="blurb5">
          <h2>Among the Palms Resort</h2>
          <img src={logo5} className="App-logo" alt="Pic5" />
          <br></br>
          <button onClick={descr5Click} className="button-class" id="butt5">
            Description
          </button>
          <p id="b5"></p>
        </div>

        <div id="blurb6">
          <h2>Cool Vibes Resort</h2>
          <img src={logo6} className="App-logo" alt="Pic6" />
          <br></br>
          <button onClick={descr6Click} className="button-class" id="butt6">
            Description
          </button>
          <p id="b6"></p>
        </div>
      </body>
    </div>
  );
}

export default App;
*/

const ResortsPage = () => {
  const resorts = [
    {
      name: "Ocean Breeze Resort",
      photo: photo1,
      desc: "Enjoy the soothing ocean breeze as you relax by the pool with a delicious cocktail. Our 350 room resort includes 2 pools, 4 restaurants, 5 bars, an activity center, and spa area. We offer 5 star accommodations and service that is second to none.\r\r$1500.00 PP based on double occupancy",
    },
    {
      name: "Tranquil Waters Resort",
      photo: photo2,
      desc: "With 15 over-the-water bungalows as well as 40 on-land bungalows, Tranquil Waters Resort offers a truly luxurious experience. No need to leave your private sanctuary. We offer around-the-clock butler service for whatever your heart desires. Our resort offers 1 bar, 2 restaurants, and 1 pool for your enjoyment as well as spa services, tennis courts, and access to various watercrafts for your pleasure.\r\r$2700 PP based on double occupancy.",
    },
    {
      name: "Tropical Oasis Resort",
      photo: photo3,
      desc: "With 560 rooms, this family resort is always bustling with activity.  3 pools and a lazy river host several programs for kids and teens daily. Our waterslide is fun for all ages. Guests of all ages can partake in our sports activities. There is a childcare center on site so parents can enjoy some much-needed free time. Our 7 restaurants provide a wide range of choices for all tastes. Along with our 4 bars, there is also a dedicated non-alcoholic children's bar where kids of all ages can enjoy kid-appropriate mocktails as well as a variety of ice cream choices.\r\r$1700.00 PP based on double occupancy.",
    },
    {
      name: "Lap of Luxury Resort",
      photo: photo4,
      desc: "You will want for nothing at this amazing location designed with luxury in mind. Our Spa services are second to none. We provide private butler service to your suite, and your own designated cabana bed. With 100 suites, 4 pools, 4 restaurants and 3 bars we offer you an amazingly luxurious vacation.\r\r$2900 PP based on double occupancy.",
    },
    {
      name: "Among the Palms Resort",
      photo: photo5,
      desc: "This family friendly resort has tons of fun for all ages. 400 Rooms with 3 pools, 6 bars, 5 restaurants and daily entertainment for both kids and adults. Our kids program provides supervised activities to keep your kids busy all day. For teens there is a games room, basketball court, beach volleyball and movie nights as well as supervised water sports. Adults can enjoy some stress free time knowing their kids are safe and having fun.\r\r$1600 PP based on double occupancy.",
    },
    {
      name: "Cool Vibes Resort",
      photo: photo6,
      desc: "This adult-only resort offers an exciting nightlife with live music and dance parties every night in each of our 3 discos. With 600 rooms there is so much party potential. During the day relax in one of our 3 pools or head to the beach for  kayaking, Sea-Doo rides or our daily catamaran excursion.\r\r$1800 PP based on double occupancy.",
    },
  ];

  return (
    <div>
      {resorts.map((resort) => {
        return (
          <ResortTile
            name={resort.name}
            photo={resort.photo}
            desc={resort.desc}
          />
        );
      })}
    </div>
  );
};

export default ResortsPage;
