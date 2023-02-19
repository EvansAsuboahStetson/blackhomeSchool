import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import "./Statistic.css";
import SwiperComponent from "./SwiperComponent";

function MidVolunteerPage() {
  return (
    <div>
      <div className="mid-page" style={{ marginTop: "20px" }}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
            md: "repeat(1, 1fr)",
          }}
          gap={6}
        >
          <GridItem w="100%">
            <div>
              <Text
                textAlign={"left"}
                ml={10}
                mt={10}
                className="text"
                fontSize={{ base: "sm", md: "lg", lg: "xl" }}
                letterSpacing="2px"
              >
               <SwiperComponent/>
              </Text>
            </div>
          </GridItem>
          <GridItem w="100%">
            <div>
              <Text
                textAlign={"left"}
                ml={10}
                mt={20}
                className="text"
                fontSize={{ base: "sm", md: "lg", lg: "xl" }}
                letterSpacing="2px"
              >
                <span
                  className="text"
                  style={{
                    borderBottom: "4px solid green",
                    display: "inline-block",
                    paddingBottom: "10px",

                    lineHeight: "28px",
                  }}
                >
                  WHY BLACKHOME{" "}
                </span>{" "}
                SCHOOLERS?
              </Text>
              <Text
                textAlign={"left"}
                ml={10}
                mt={10}
                className="text"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
              >
                Here is to what our volunteers have to say about Black
                HomeSchool
              </Text>
              <Text
                textAlign={"left"}
                ml={10}
                mt={10}
                className="text"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
              >
                Interested in getting involved? Fill out our Volunteer
                Application/Packet{" "}
                <a
                  href="https://www.blackhomeschoolerscfl.com/BHCFL%20Volunteer%20Packet-1.pdf"
                  download
                >
                  <span
                    className="text"
                    style={{
                      color: "green",
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    here
                  </span>
                </a>
              </Text>
            </div>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}

export default MidVolunteerPage;
