
import Services from "../AboutUs/Services";
import Hero from "../AboutUs/Hero";

import Rock from "../../components/assets/rocks.jpeg"
import StatisticCircle from "./Statistics";

export default function VolunteerPage() {
  return (
    <div>
      <div>
        <Hero url={Rock} name="VOLUNTEER WITH US" />
        
      </div>
      <div>
        <StatisticCircle person={50}  hours={1000}/>
      </div>
    
    </div>
  );
}
