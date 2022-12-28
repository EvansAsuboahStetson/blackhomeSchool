import React from "react";
import Hero from "../AboutUs/Hero";
import ballet from "../../components/assets/ballet.jpg";
import Services from "../AboutUs/Services";
import Checkout from "./Checkout";
import { Heading, Text } from "@chakra-ui/react";

function Gear() {
 
  return (
    <div>
      
      <div>
        <Hero url={ballet} name={"GIVE"} />
        <Services />
      </div>

      <Heading margin={10}>BUY OUR PRODUCTS</Heading>
    

      <Checkout/>

 
    </div>
  );
}

export default Gear;
