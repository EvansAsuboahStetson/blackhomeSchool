import {
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import "./Donate.css";
import { Heading, Text, Stack, Button } from "@chakra-ui/react";
import GridTable from "./GridTable";


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
            <Stack
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
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
              </Stack>
            </Stack>
          </div>
        </GridItem>
        <div className="right-side">
        <GridItem>
            <Heading><Text className="text">Impact of Your Donation</Text></Heading>
            <div>
            <GridTable/>
            </div>
           
        </GridItem>

        </div>

      
      </Grid>
    </div>
  );
}

export default ImpactPage;
