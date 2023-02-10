import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import { BsPerson } from "react-icons/bs";

import { Waypoint } from "react-waypoint";

import { TiWatch } from "react-icons/ti";

import { useState, useEffect } from "react";
import Counter from "./Counter";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"}>{title}</StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function StatisticCircle({ person, hours }) {
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    setStartCounter(false);
  }, [person, hours]);

  return (
    <Box maxW="9xl" mx={"auto"} pt={9} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        <Text
          className="text"
          bgGradient="radial(gray.300, yellow.400, pink.200)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          BE A VOLUNTEER TODAY
        </Text>
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Number of Volunteers"}
          stat={
            <Waypoint onEnter={() => setStartCounter(true)}>
              {startCounter ? (
                <Counter start={0} end={person} duration={3} delay={0.5} />
              ) : (
                0
              )}
            </Waypoint>
          }
          icon={<BsPerson size={"3em"} />}
        />

        <StatsCard
          title={"Total Volunteer Hours"}
          stat={
            <Waypoint onEnter={() => setStartCounter(true)}>
              {startCounter ? (
                <Counter start={0} end={hours} duration={3} delay={0.5} />
              ) : (
                0
              )}
            </Waypoint>
          }
          icon={<TiWatch size={"3em"} />}
        />
        <StatsCard
          title={"Total Volunteer Hours"}
          stat={"1,000"}
          icon={<TiWatch size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
