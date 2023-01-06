import {
  Grid,
  GridItem,
  useColorModeValue,
  Divider,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";

import "./Donate.css";
import {
  Heading,
  Text,
  Stack,
  Button,
  ListIcon,
  ListItem,
  List,
} from "@chakra-ui/react";
import GridTable from "./GridTable";
import SCholarForms from "./ScholarshipForm";
import ShowHide from "./ShowHide";
import { AiOutlineDown } from "react-icons/ai";
import { MdSettings, MdCheckCircle } from "react-icons/md";

const ListFeature = ({ needs }) => {
  return (
    <div>
      {" "}
      {needs.map((need, index) => (
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            {need}
          </ListItem>
        </List>
      ))}
    </div>
  );
};

function ImpactPage() {
  let bgButton = useColorModeValue(
    "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
    "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
  );
  let navbarPosition = "fixed";
  let colorButton = "white";

  console.log(process.env.REACT_APP_PAYPAL_DONATE_ID);
  return (
    <div>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={0}
        className="impact-page"
      >
        <GridItem>
          <div className="leftSide">
            <div className="info-stack">
              <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 18 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                  <Heading
                    className="text"
                    lineHeight={1.1}
                    fontWeight={100}
                    fontSize={{ base: "3xl", sm: "3xl", lg: "3xl" }}
                  >
                    <Text className="text" as={"span"} color={"black.400"}>
                      No contribution is too small
                    </Text>
                    <br />

                    <br />
                    <a
                      className="text"
                      href={process.env.REACT_APP_PAYPAL_DONATE_ID}
                    >
                      <Button
                        _hover={{ boxShadow: "none" }}
                        bg={bgButton}
                        color={colorButton}
                        fontSize="sm"
                        borderRadius="14px"
                        px="30px"
                        _active="none"
                        size="lg"
                      >
                        Donate Now
                      </Button>
                    </a>
                  </Heading>
                  <div className="scholarforms">
                    <SCholarForms />
                  </div>
                </Stack>
              </Stack>
            </div>

            <div className="showSection">
              <Box padding={4}>
                <Divider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                  borderRadius="lg"
                />
                <span>
                  {" "}
                  <ShowHide
                    title={"Hey Man"}
                    children="Yo"
                    icon={
                      <Icon as={AiOutlineDown} color={"gray.500"} w={5} h={5} />
                    }
                    list={
                      <ListFeature needs={["Color printer and ink","HP Printer Ink 952","Document Sheet protectors"," 8 1/2 x 11 white copy paper","Postage Stamps & Envelopes"]}/>
                    }
                  />
                </span>
                <Divider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                  borderRadius="lg"
                />
                <ShowHide
                  title={"Hey Bro"}
                  children="Sap"
                  icon={
                    <Icon as={AiOutlineDown} color={"gray.500"} w={5} h={5} />
                  }
                  list={
                    <ListFeature needs={["Color printer and ink","HP Printer Ink 952","Document Sheet protectors"," 8 1/2 x 11 white copy paper","Postage Stamps & Envelopes"]}/>
                  }
                />
                <Divider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                  borderRadius="lg"
                />
                <ShowHide
                  title={"Good Man"}
                  children="You and You"
                  icon={
                    <Icon as={AiOutlineDown} color={"gray.500"} w={5} h={5} />
                  }
                  list={
                    <ListFeature needs={["Color printer and ink","HP Printer Ink 952","Document Sheet protectors"," 8 1/2 x 11 white copy paper","Postage Stamps & Envelopes"]}/>
                  }
                />
                <Divider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                  borderRadius="lg"
                />
              </Box>
            </div>
          </div>
        </GridItem>
        <div className="right-side">
          <GridItem>
            <Heading>
              <Text className="text">Impact of Your Donation</Text>
            </Heading>
            <div>
              <GridTable />
            </div>
          </GridItem>
        </div>
      </Grid>
    </div>
  );
}

export default ImpactPage;
