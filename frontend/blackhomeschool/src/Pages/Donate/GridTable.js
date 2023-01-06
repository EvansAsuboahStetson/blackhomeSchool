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
import VerticallyCenter from "./PopUPModal";

function GridTable() {
  const suppliesSponsorship =
    "Help us keep our kids and community supplied!  Many of our programs are open to the larger homeschooling community – not just our members.  We also continue to serve homeschooling families who may need help getting the supplies and curriculum they need.  Your Supplies Sponsorship will help us meet these ongoing needs. *This sponsorship includes Platinum Level Event Sponsorship at all of our future events for 2 years following your donation.";
  const programSponsorship =
    "Want to be a part of our future right now?  You can help support our organization through a financial contribution to our programs.  Our goal is to be able to pay for specialized teachers, speakers, events, learning experiences and our on-going learning programs at a reduced cost to our homeschooling families.  By being a Program Sponsor you will be directly contributing to the high quality education of our youth.*This sponsorship includes Platinum Level Event Sponsorship at all of our future events for 5 years following your donation.";
  const buildScholarship =
    "1 (one) sponsorship available. Help us with the purchase of our facility to be located in the West Volusia area and we’ll name the building after you! *This sponsorship includes lifetime Platinum Level Event Sponsorship at any of our future events";
  const roomSponsorship =
    "Once we have our building, we will need to work on renovations as well as purchasing equipment and supplies for our facility.  Consider this option for your business and sponsor one of our rooms which will include a plaque honoring your contribution to our cause.  Plaque will read something like This room was graciously donated by… or this Computer Lab is sponsored by ….  *This sponsorship includes Platinum Level Event Sponsorship at all of our future events for 10 years or until the room needs donations for upgrades – whichever comes first.";
  return (
    <div>
      <SimpleGrid
        spacing={2}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          md: "repeat(1, 1fr)",
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
          <CardFooter>
            <VerticallyCenter
              text={buildScholarship}
              title="BUILDING SPONSORHIP"
            />
          </CardFooter>
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
              Help us with the renvotion of our facility to once we get the have
              our building
            </Text>
          </CardBody>
          <CardFooter>
            <VerticallyCenter text={roomSponsorship} title="ROOM SPONSORHIP" />
          </CardFooter>
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
              Help support our organization through a financial contribution to
              our programs.
            </Text>
          </CardBody>
          <CardFooter>
            <VerticallyCenter
              text={programSponsorship}
              title="PROGRAM SPONSORHIP"
            />
          </CardFooter>
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
          <CardFooter>
            <VerticallyCenter
              text={suppliesSponsorship}
              title="SUPPLIES SPONSORHIP"
            />
          </CardFooter>
        </Card>
      </SimpleGrid>
    </div>
  );
}

export default GridTable;
