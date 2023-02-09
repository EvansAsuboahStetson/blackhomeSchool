import React from "react";
import Hero from "../AboutUs/Hero";
import Services from "../AboutUs/Services";
import JoinCover from "./JoinCover";

function JoinUs() {
  return (
    <div>
      <div>
        <Hero
          url={
            "https://c4.wallpaperflare.com/wallpaper/659/886/545/african-body-painting-paintings-wallpaper-preview.jpg"
          }
          name="JOIN US"
        />
        <Services/>
      

      </div>


      <div>
        <JoinCover />
      </div>
    </div>
  );
}

export default JoinUs;
