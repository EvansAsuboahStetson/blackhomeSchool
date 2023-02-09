import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import "../../Pages/HomeInfo/HomeInfo.css";

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
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
        marginBottom={"10px"}
        padding="10px"
      >
        <chakra.h3 className="text comment_home" fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
      </Text>

      <chakra.p className="text comment_home">{text}</chakra.p>
    </GridItem>
  );
};

export default function Blogs() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={3}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={2}>
          <VStack alignItems="center" spacing="10px">
            <chakra.h2 fontSize="4xl" fontWeight="400">
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
                <Heading>Latest Post</Heading>
              </Text>
            </chakra.h2>
          </VStack>
        </GridItem>
        <GridItem></GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={
            "An exclusive interview with Rasheeda Denning on homeschooling, inclusion, virtual volunteering, and more"
          }
          text={
            "Every year, more families are moving towards homeschooling their children. Surveys show that there are an estimated 2.5 million homeschooled children in the United… Keep Reading"
          }
        />
        <Feature
          heading={"School Bus Initiative"}
          text={
            "The focus of our last quarter has been working with local groups to improve bus networks. We believe that it is vital to provide…"
          }
        />
        <Feature
          heading={"10,000 Pencils Delivered to Schools"}
          text={
            "This summer, because of the effort of our volunteers and the generous donations from our sponsors, we were able to deliver 10,000 pencils to…"
          }
        />
      </Grid>
      <Divider mt={12} mb={12} />
    </Box>
  );
}
