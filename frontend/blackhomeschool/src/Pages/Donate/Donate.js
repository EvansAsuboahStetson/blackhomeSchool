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

function Donate() {
  return (
    <div className="donate">
      <div>
        <Hero url={ballet} name={"DONATE"} />
        <Services number1="Silent Auction" number2="Becoming a Vendor" number3="Community Partners" location1="SilentAuction" location2="becomeVendor" location3="communityPartners" icon1={faBasketShopping} icon2={faHandshake} icon3={faHandsHolding} />
        <ImpactPage />
      </div>
      <div>
        <CarouselPage />
      </div>
    </div>
  );
}

export default Donate;
