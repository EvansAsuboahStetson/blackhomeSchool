import {
  Grid,
  GridItem,
  useColorModeValue,
  Divider,
  Box,
  Icon,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  ListIcon,
  ListItem,
  List,
} from "@chakra-ui/react";
import React from "react";

import "./Donate.css";
import GridTable from "./GridTable";
import SCholarForms from "./ScholarshipForm";
import ShowHide from "./ShowHide";
import { AiOutlineDown } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";

import Plat from "../../images/Plat.png";

const ListFeature = ({ needs }) => {
  return (
    <div>
      {" "}
      {needs.map((need, index) => (
        <List spacing={2}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <div className="text">{need}</div>
          </ListItem>
        </List>
      ))}
    </div>
  );
};

const Componentials = ({ logo, needs, text }) => {
  return (
    <div>
      <div>
        <Box>
          <Image
            src={logo}
            alt="Dan Abramov"
            className="flex justify-center items-center"
          />
        </Box>
      </div>
      <div>
        <Text className="text">{text}</Text>
        <Text>Sponsorship at this level includes the following:</Text>
        <ListFeature needs={needs} />
      </div>
    </div>
  );
};

function ImpactPage() {
  let bgButton = useColorModeValue(
    "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
    "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
  );

  let colorButton = "white";
  return (
    <div className="sholarship-page">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)",
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
                py={{ base: 10, md: 8 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                  <Heading
                    className="text"
                    lineHeight={1.1}
                    fontWeight={100}
                    fontSize={{ base: "2xl", sm: "2xl", lg: "3xl" }}
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

            <div>
              <Box padding={2} className="SHide">
                <Divider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                  borderRadius="lg"
                />{" "}
                <ShowHide
                  title={"Platinum - $1000"}
                  icon={
                    <Icon as={AiOutlineDown} color={"gray.500"} w={5} h={5} />
                  }
                  components={
                    <Componentials
                      text="Sponsoring at this level is serious business and shows you wish to build a relationship with us as we continue to move forward in achieving our goals.
                    Reach the community with this all-inclusive package –vendor space; advertising through print, web, grab bags, social media, AND the opportunity to speak directly to your community!"
                      needs={[
                        "Vendor Space at the Event to include 1 table and 2 chairs in our Platinum Reserved Area (lobby/FIRST Seen)",
                        "HP Printer Ink 952",
                        "FULL Page ad for you or your business in our 2024 Journal",
                        "Inclusion of up to three paper items in our Grab Bags (Business/Rack cards, flyers, coupons, brochures, etc.) and a promotional item with your business logo/information (pen, bracelet, balloon, wipes, etc.)",
                        "Mention during event and inclusion in the video presentation",
                      ]}
                      logo={Plat}
                    />
                  }
                />
                <Divider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                  borderRadius="lg"
                />
                <ShowHide
                  title={"Gold- $750"}
                  icon={
                    <Icon as={AiOutlineDown} color={"gray.500"} w={5} h={5} />
                  }
                  components={
                    <Componentials
                      text="At this sponsorship level you are truly partnering with us to forward our Mission and we are so grateful! Reach the community with this all-inclusive package – vendor space; advertising through print, web, grab bags, social media, AND the opportunity to speak directly to your community!

                      "
                      needs={[
                        "Vendor Space at the Event to include 1 table and 2 chairs in our Platinum Reserved Area (lobby/FIRST Seen)",
                        "Half Page ad for you or your business in our 2024 Journal",
                        "Inclusion of up to three paper items in our Grab Bags (Business/Rack cards, flyers, coupons, brochures, etc.",
                        "Mention during event and inclusion in the video presentation",
                        "Inclusion of your logo and promotion of your business on our website as a sponsor",
                        "Quarterly promotion/advertising of you or your business as a partner via our social media sites",
                        "20 Minute Spotlight presentation during event in the main hall",
                      ]}
                      logo="https://mediaprocessor.websimages.com/width/358/crop/0,0,358x293/www.blackhomeschoolerscfl.com/gold.gif"
                    />
                  }
                />
                <Divider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                  borderRadius="lg"
                />
                <ShowHide
                  title={"Silver- $500"}
                  icon={
                    <Icon as={AiOutlineDown} color={"gray.500"} w={5} h={5} />
                  }
                  components={
                    <Componentials
                      needs={[
                        " Vendor Space at the Event to include 1 table and 2 chairs in our Silver Reserved Area",
                        "Quarter Page ad for you or your business in our 2024 Journal",
                        "Inclusion of a business or rack card and a brochure or Flyer in our Grab Bags",
                        "Mention during event and inclusion in the video presentation",
                        "Inclusion/Promotion of your business on our website as a sponsor",
                        "10 Minute Spotlight presentation during event in the main hall",
                      ]}
                      text="Get more! Reach the community with this all-inclusive package – vendor space;
                      advertising through print, web and grab bags, AND the opportunity to speak directly to our community!"
                      logo="https://mediaprocessor.websimages.com/width/398/crop/0,0,398x314/www.blackhomeschoolerscfl.com/bronze.png"
                    />
                  }
                />
                <Divider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                  borderRadius="lg"
                />
                <ShowHide
                  title={"Bronze- $400"}
                  icon={
                    <Icon as={AiOutlineDown} color={"gray.500"} w={5} h={5} />
                  }
                  components={
                    <Componentials
                      needs={[
                        "Vendor Space at the event to include 1 table and 2 chairs In our Bronze Reserve Area",
                        "Business Card size ad for you or your business in our 2024 Journal",
                        " Inclusion of your Business Card in our Grab Bags",
                        "Mention during event and inclusion in the video presentation",
                        "Inclusion/Promotion of your business on our website as a sponsor",
                      ]}
                      text="Want to bring your business to Community EXPO? Consider an all-inclusive package through our Bronze sponsorship package and receive a discounted price!"
                      logo="https://mediaprocessor.websimages.com/width/398/crop/0,0,398x314/www.blackhomeschoolerscfl.com/bronze.png"
                    />
                  }
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
