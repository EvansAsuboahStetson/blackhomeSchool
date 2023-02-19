import { Grid, GridItem, Text } from "@chakra-ui/react";

import Hero from "../AboutUs/Hero";

import Rock from "../../components/assets/rocks.jpeg";
import StatisticCircle from "./Statistics";
import "./Statistic.css";
import MidVolunteerPage from "./MidVolunteerPage";

export default function VolunteerPage() {
  return (
    <div>
      <div>
        <Hero url={Rock} name="GET INVOLVED" />
      </div>
      <MidVolunteerPage/>

        <div className="stats">
          <StatisticCircle person={50} hours={1000} />
        </div>
      </div>
   
  );
}
