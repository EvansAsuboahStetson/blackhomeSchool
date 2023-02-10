import React from "react";
import Hero from "../AboutUs/Hero";

import SilentAuctionImage from "../../components/assets/SilentAuctionImage.png";
import Sponsors from "./SponsorsCarousel";
import ImpactPage from "../Donate/ImpactPage";
import Services from "../AboutUs/Services";
import SilentPage from "./SilentPage";
export default function SilentAuction() {
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
  const title = "Silent Auction Partners"
  return (
    <div className="donates">
      <div>
        <Hero url={SilentAuctionImage} />
        <Services />
      </div>
      <SilentPage />
      <div>
        <Sponsors cardsSystem={cardsSystem} title={title} />
      </div>
    </div>
  );
}
