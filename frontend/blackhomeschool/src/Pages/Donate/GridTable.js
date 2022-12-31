import React from "react";
import {
  SimpleGrid,
  Heading,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Button,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { TbBuildingBank } from "react-icons/tb";
import { AiOutlineCaretUp } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TiSortAlphabetically } from "react-icons/ti";

function GridTable() {
  return (
    <div>
      <SimpleGrid
        spacing={2}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
      >
        <Card className="card-container" bg="blue">
          <CardHeader>
            <Heading color="white" size="md" className="text">
              <div className="arrangement-icon">
                <div className="amount text">$500,000</div>
                <div className="icon_direction">
                  <Icon as={AiOutlineCaretUp} color="green" />
                </div>
              </div>
            </Heading>
          </CardHeader>
          <Text color="white" className="text">
            BUILDING SCHOLARSHIP
          </Text>
          <CardBody>
            <Icon as={TbBuildingBank} boxSize={10} color="white"></Icon>
          </CardBody>
          <CardBody>
            <Text color="white" className="text">
              Help us with the purchase of our facility to be located in the
              West Volusia area and we’ll name the building after you!
            </Text>
          </CardBody>
        </Card>
        <Card className="card-container" bg="#B2D2A4">
          <CardHeader>
            <Heading color="white" size="md" className="text">
              <div className="arrangement-icon">
                <div className="amount text">$25,000-$100,000</div>
              </div>
            </Heading>
          </CardHeader>
          <Text color="white" className="text">
            ROOM SPONSORSHIP
          </Text>
          <CardBody>
            <Icon as={BsBuilding} boxSize={10} color="white"></Icon>
          </CardBody>
          <CardBody>
            <Text color="white" className="text">
            Help us with the renvotion  of our facility to once we get the have our building
            </Text>
          </CardBody>
        </Card>
        <Card className="card-container" bg="#B2D2A4">
          <CardHeader>
            <Heading color="white" size="md" className="text">
              <div className="arrangement-icon">
                <div className="amount text">$10,000-$15,000</div>
              </div>
            </Heading>
          </CardHeader>
          <Text color="white" className="text">
            PROGRAM SPONSORSHIP
          </Text>
          <CardBody>
            <Icon
              as={MdOutlineFamilyRestroom}
              boxSize={10}
              color="white"
            ></Icon>
          </CardBody>
          <CardBody>
            <Text color="white" className="text">
            Help support our organization through a financial contribution to our programs.
            </Text>
          </CardBody>
        </Card>
        <Card className="card-container" bg="blue">
          <CardHeader>
            <Heading color="white" size="md" className="text">
              <div className="arrangement-icon">
                <div className="amount text">$2000-$5000</div>
              </div>
            </Heading>
          </CardHeader>
          <Text color="white" className="text">
            SUPPLIES SPONSORSHIP
          </Text>
          <CardBody>
            <Icon as={TiSortAlphabetically} boxSize={10} color="white"></Icon>
          </CardBody>
          <CardBody>
            <Text color="white" className="text">
            Help us keep our kids and community supplied!
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </div>
  );
}

export default GridTable;
