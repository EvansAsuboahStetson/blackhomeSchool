import React from "react";
import Hero from "../AboutUs/Hero";
import ballet from "../../components/assets/ballet.jpg";
import Services from "../AboutUs/Services";
import Checkout from "../Gear/Checkout";
import StatisticCircle from "../Volunteer/Statistics";

function Payment() {
  return (
    <div>
      <div>
        <Hero url={ballet} name={"GIVE"} />
        <Services />
      </div>
 
 
    </div>
  );
}

export default Payment;
