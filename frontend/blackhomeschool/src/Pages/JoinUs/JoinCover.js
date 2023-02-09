import {
  Stack,
  StackDivider,
  Box,
  Text,
  CardBody,
  Heading,
  CardHeader,
  Card,
  SimpleGrid,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import "./JoinUs.css";

// Replace test data with your own

const list_features = [
  {
    link: "https://goo.gl/forms/oByKxhDeZGsyyCc43",
    text: "Please read and sign our Participation Policy.",
  },
  {
    link: "https://goo.gl/forms/Q1ykB4nKp6d6aUk02",
    text: "Fill out your Member Registration Forms online Or download & email your Member Registration Form to  BHCFLStrong@gmail.com",
  },
  {
    link: "https://calendly.com/bhcflstrong",
    text: "Schedule a membership call. Opens May 1st.",
  },

  {
    link: "/payments",
    text: "Once you get the all clear from your membership call, please make your Annual Dues Payment on the Payments Page.",
  },
  {
    link: "https://forms.gle/YrzShFvEprxzVSSR6",
    text: "Fill out your Online Travel & Trip Liability Form. Please fill one out for each family member and then press submit",
  },
  {
    link: "https://goo.gl/forms/V19LoB8Io2afBa6I3",
    text: "Fill out your Media Release Form. Please fill one out for each family member and then press submit.",
  },

  {
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeCVtFG6Jcyd05lxfgmSoa9jZMz8ut3NiqrGwTU5ECY-5Iv3A/viewform?fbclid=IwAR0F59JdWvfxRihJ-NaTGWQDUQ3ngYITLXY0ZYgear3Dzu78xsf0tUb9JYk",
    text: "Fill out your COVID-19 Liability Waiver. This one form covers your entire family.",
  },

  {
    link: "https://waiver.fr/p-t7vYN",
    text: "Fill out and sign a BHCFL Sports Waiver, one for each participant.",
  },
  {
    link: "https://fdle.state.fl.us/Criminal-History-Records/Florida-Checks",
    text: "Submit your cleared background check to the BHCFL President BEFORE August 1st at President@blackhomeschoolerscfl.com. You may get a background check for $25 through this link. Please go to the Certified/Non-Certified section to order your report",
  },
  {
    link: "/gear",
    text: "Get your BHCFL Gear!",
  },
];

export default function JoinCover() {
  return (
    <div>
      <SimpleGrid spacing={10}>
        <Card>
          <CardHeader>
            <Text
              textTransform={"uppercase"}
              color={"green.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
              className="text"
            >
              <Heading size="md">JOIN/REVIEW</Heading>
            </Text>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="10">
              {list_features.map((feature, index) => (
                <Link href={feature.link} isExternal className="list_items">
                  <Box>
                    <Text pt="2" fontSize="sm" className="text">
                      {feature.text}
                    </Text>
                  </Box>
                </Link>
              ))}
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </div>
  );
}
