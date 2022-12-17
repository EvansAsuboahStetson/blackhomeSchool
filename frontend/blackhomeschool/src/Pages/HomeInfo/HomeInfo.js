import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  
} from "@chakra-ui/react";
import "./HomeInfo.css"


const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
     
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const HomeInfo = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">It Takes A Village!</Heading>
      <Divider marginTop="5" />
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            marginTop={{ base: "3", sm: "0" }}
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
          >
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
              className="text"
            >
              Black Homeschoolers of Central Florida, Inc. is a village, a place
              that homeschoolers call home. We provide a safe, supportive, and
              learning environment for our homeschooling families, which is
              especially important for families of color that may not get the
              support they need in other places. We provide classes, resources
              and information, options, and events curtailed to meet the needs
              of our families.
            </Text>

            {/* <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link> */}
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          {/* <BlogTags tags={['Engineering', 'Product']} /> */}
          {/* <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            It Takes A Village
            </Link>
          </Heading> */}
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
            className="text"
          >
            At BHCFL, families find a welcoming village environment that
            provides support and guidance, and equips the parents with the
            skills & confidence they need to be successful on their
            homeschooling journey. Our youth flourish in an environment where
            their culture and history is celebrated and explored. This village
            encourages education, self love, and growth. Not only does Black
            Homeschoolers of Central Florida help build friendships, but in our
            village, friends become family.
          </Text>
          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Mission Statement
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: "100%", sm: "45%", md: "100%", lg: "100%" }}>
          {/* <Box w="100%"  >
            <Box borderRadius="lg" overflow="hidden" >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
          
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                It Takes A Village
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date("2021-04-06T19:01:27Z")}
            />
          </Box> */}
          <Box
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center"
            >
              <Box
                width={{ base: "100%", sm: "85%" }}
                zIndex="2"
                marginLeft={{ base: "0", sm: "5%" }}
                marginTop="5%"
              >
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    borderRadius="lg"
                    src={
                      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: "3", sm: "0" }}
            >
              <Text
                as="p"
                marginTop="2"
                color={useColorModeValue("gray.700", "gray.200")}
                fontSize="lg"
                className="text"
              >
                Black Homeschoolers of Central Florida, Inc. exists solely to
                inform, educate, and help other homeschooling families, namely
                those of color, in the Central Florida area and around the
                United States. Black Homeschoolers of Central Florida, Inc.
                executes that mission by providing classes, guest speakers in
                career fields, field trips, hosting an annual graduation/awards
                ceremony, a lending library, informative communications,
                support, motivation, family to family connections, and
                connections to other support groups at the local and state
                level.
              </Text>
              <Text
                as="p"
                marginTop="2"
                color={useColorModeValue("gray.700", "gray.200")}
                fontSize="lg"
                className="text"
               
              >
                Black Homeschoolers of Central Florida empowers our children and
                inspires parents to harness the power within to educate their
                children. This organization is not affiliated with any one
                religion and is open to people of all faiths. Black
                Homeschoolers of Central Florida is a 501(c)(3) Non-Profit
                Organization.
              </Text>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default HomeInfo;
