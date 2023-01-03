import React from "react";
import Hero from "../AboutUs/Hero";
import ballet from "../../components/assets/ballet.jpg";
import Services from "../AboutUs/Services";
import ImpactPage from "./ImpactPage";
import { CommunityPartners } from "./CommunityPartners";
import "./Donate.css"
import CarouselPage from "./Carousel";


function Donate() {
  return (
    <div className="donate">
      <div>
        <Hero url={ballet} name={"DONATE"} />
        <Services/>
        
        <ImpactPage/>
      
      </div>
     <div>
     <CarouselPage/>
     </div>
    </div>
  );
}

export default Donate;
