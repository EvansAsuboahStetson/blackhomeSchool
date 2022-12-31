import React from "react";
import Hero from "../AboutUs/Hero";
import ballet from "../../components/assets/ballet.jpg";
import Services from "../AboutUs/Services";
import ImpactPage from "./ImpactPage";


function Donate() {
  return (
    <div>
      <div>
        <Hero url={ballet} name={"DONATE"} />
        <ImpactPage/>
      
      </div>
    </div>
  );
}

export default Donate;
