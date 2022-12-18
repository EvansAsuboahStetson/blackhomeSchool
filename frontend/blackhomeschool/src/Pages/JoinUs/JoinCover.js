import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    useColorModeValue,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Image,
    Flex,
    ListItem,
    List,
  } from "@chakra-ui/react";
  import { CheckIcon, CheckCircleIcon } from "@chakra-ui/icons";
  import "./JoinUs.css";
  import { Link } from "react-router-dom";
  
  // Replace test data with your own
  const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
      id: i,
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
    };
  });
  
  const list_features = [
    {
      link: "https://goo.gl/forms/oByKxhDeZGsyyCc43",
      text: "Please read and sign our Participation Policy.",
    },
    {
      link: "https://goo.gl/forms/Q1ykB4nKp6d6aUk02",
      text: "Fill out your Member Registration Forms online Or download & email your Member Registration Form to   BHCFLStrong@gmail.com",
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
      link: "fdle.state.fl.us/Criminal-History-Records/Florida-Checks",
      text: "Submit your cleared background check to the BHCFL President BEFORE August 1st at President@blackhomeschoolerscfl.com. You may get a background check for $25 through this link. Please go to the Certified/Non-Certified section to order your report",
    },
    {
      link: "/gear",
      text: " Get your BHCFL Gear!",
    },
  ];
  
  export default function JoinCover() {
    return (
      <Flex>
        <Flex
          boxShadow={"sm"}
          maxW={"70%"}
          margin={"20px"}
          direction={{ base: "column-reverse", md: "row" }}
          width={"full"}
          rounded={"xl"}
          p={10}
          justifyContent={"space-between"}
          position={"relative"}
          bg={useColorModeValue("white", "gray.800")}
          _after={{
            content: '""',
            position: "absolute",
            height: "21px",
            width: "29px",
            left: "35px",
            top: "-10px",
            backgroundSize: "cover",
         
          }}
          _before={{
            content: '""',
            position: "absolute",
            zIndex: "-1",
            height: "full",
            maxW: "640px",
            width: "full",
            filter: "blur(40px)",
            transform: "scale(0.98)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            top: 0,
            left: 0,
          }}
        >
          <Box p={4}>
            <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
              <Heading className="text" fontSize={"3xl"}>
                Join/Review
              </Heading>
              <Text className="text" color={"black.600"} fontSize={"xl"}>
                If you would like to join BHCFL, please follow the listed steps.
              </Text>
            </Stack>
  
            <Container maxW={"6xl"} mt={10}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
                {list_features.map((feature, index) => (
                  <HStack key={index} align={"top"}>
                    <Box color={"gray.400"} px={2}>
                      {index + 1}
                      {/* <Icon as={CheckCircleIcon} /> */}
                    </Box>
                    <a href={feature.link} target="_blank">
                 
                    <VStack align={"start"} className="list_items">
                      <Text className="text" fontWeight={400}>
                        {feature.title}
                      </Text>
                      <Text color={"black.600"} className="text">
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckCircleIcon} />
                        </Box>
                        {feature.text}
                      </Text>
                    </VStack>
                    </a>
                  </HStack>
                ))}
              </SimpleGrid>
            </Container>
          </Box>
        </Flex>
        <Flex margin={"20px"} rounded={"xl"} p={6}>
          <List spacing={10}>
            <ListItem>
              <Image
                boxSize="200px"
                src="https://mediaprocessor.websimages.com/width/290/crop/0,1,290x174/www.blackhomeschoolerscfl.com/logo.png"
                alt="Dan Abramov"
              />
            </ListItem>
            <ListItem>
              <Image
                boxSize="200px"
                src="https://mediaprocessor.websimages.com/width/290/crop/0,0,290x174/www.blackhomeschoolerscfl.com/1545221_10154040417396913_1151775487156418169_n.jpg"
                alt="Dan Abramov"
              />
            </ListItem>
            <ListItem>
              <Image
                boxSize="200px"
                src="https://mediaprocessor.websimages.com/width/290/crop/0,145,290x174/www.blackhomeschoolerscfl.com/12314661_10153811119871913_4030807541662273660_o.jpg"
                alt="Dan Abramov"
              />
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <Image
                boxSize="200px"
                src="https://mediaprocessor.websimages.com/width/248/crop/0,0,248x147/www.blackhomeschoolerscfl.com/20157784_10155583128616913_3152555752746016890_o-1.jpg"
                alt="Dan Abramov"
              />
  
            </ListItem>
            <ListItem>
              <Image
                boxSize="200px"
                src="https://mediaprocessor.websimages.com/width/186/crop/0,32,186x117/www.blackhomeschoolerscfl.com/HSLDA_logo_v_RGB.png"
                alt="Dan Abramov"
              />
            </ListItem>
          </List>
        </Flex>
      </Flex>
    );
  }
  