import React from "react";

import {
  Box,
  VStack,
  Button,
  Flex,
  Text,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Heading,
  Center,
  Square,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faHandsHolding,
  faBasketShopping,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { Link as RouteLink } from "react-router-dom";

const ServicesFeature = ({ title, location, icon }) => {
  return (
    <GridItem w="100%" h="80" bg="green.500">
      <Center h="100%" w="100%" color="white" className="center">
        <FontAwesomeIcon icon={icon} className="handsUp" />

        <RouteLink to={`/${location}`}>
          <Heading margin="20px" className="text">
            {title}
          </Heading>
        </RouteLink>
      </Center>
    </GridItem>
  );
};

function Services({
  number1,
  number2,
  number3,
  location1,
  location2,
  location3,
  icon1,
  icon2,
  icon3
}) {
  return (
    <div className="about_us">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={0}
      >
        {/* <GridItem w="100%" h="80" bg="blue.500">
          <Center h="100%" w="100%" color="white" className="center">
            <FontAwesomeIcon icon={faHandsHolding} className="handsUp" />
            <Heading margin="20px" className="text">
             {number1}
            </Heading>
          </Center>
        </GridItem> */}
        <ServicesFeature title={number1} location={location1} icon={icon1} />
        <ServicesFeature title={number2} location={location2} icon={icon2} />
        <ServicesFeature title={number3} location={location3} icon={icon3} />
      </Grid>
    </div>
  );
}

export default Services;
