import React from "react";
import Hero from "../AboutUs/Hero";
import ballet from "../../components/assets/ballet.jpg";
import Services from "../AboutUs/Services";
import ImpactPage from "./ImpactPage";
import "./Donate.css";
import CarouselPage from "./Carousel";

import {
  faAward,
  faHandsHolding,
  faBasketShopping,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import Sponsor from "../SilentAuction/SponsorsCarousel";

function Donate() {
  const title ="Community Partners"
  const cardsSystem = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg",
    },
    {
      logo: "https://cdn.mos.cms.futurecdn.net/5StAbRHLA4ZdyzQZVivm2c-970-80.jpg",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg",
    },
    {
      logo: "https://cdn.mos.cms.futurecdn.net/5StAbRHLA4ZdyzQZVivm2c-970-80.jpg",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Seal_of_Daytona_State_College.png/220px-Seal_of_Daytona_State_College.png",
    },

    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/Hispanic-Federation-Triangle-Logo-FPP-200x93-1.png",
    },
    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/rollins.png",
    },
    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/sh.png",
    },
    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/rollins.png",
    },
    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/sh.png",
    },
    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/rollins.png",
    },
    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/sh.png",
    },
    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/rollins.png",
    },
  ];
  return (
    <div className="donate">
      <div>
        <Hero url={ballet} name={"DONATE"} />
        <Services number1="Silent Auction" number2="Becoming a Vendor" number3="Volunteer" location1="SilentAuction" location2="becomeVendor" location3="volunteering" icon1={faBasketShopping} icon2={faHandshake} icon3={faHandsHolding} />
        <ImpactPage />
      </div>
      <div>
       <Sponsor cardsSystem={cardsSystem} title={title}/>
      </div>
    </div>
  );
}

export default Donate;
