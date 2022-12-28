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

function Services() {
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
        <GridItem w="100%" h="80" bg="blue.500">
          <Center h="100%" w="100%" color="white" className="center">
            <FontAwesomeIcon icon={faHandsHolding} className="handsUp" />
            <Heading margin="20px" className="text">
              BE A VOLUNTEER
            </Heading>
          </Center>
        </GridItem>
        <GridItem w="100%" h="80" bg="gray.500">
          <Center h="100%" w="100%" color="white" className="center">
            <FontAwesomeIcon icon={faAward} className="handsUp" />
            <Heading margin="20px" className="text">
              BE A DONOR
            </Heading>
          </Center>
        </GridItem>
        <GridItem w="100%" h="80" bg="green.500">
          <Center h="100%" w="100%" color="white" className="center">
            <FontAwesomeIcon icon={faHandshake} className="handsUp" />
            <Heading margin="20px" className="text">
              BE A MEMBER
            </Heading>
          </Center>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Services;
