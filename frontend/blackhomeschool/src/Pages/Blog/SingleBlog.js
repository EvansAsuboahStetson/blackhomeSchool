import { Heading } from "@chakra-ui/react";
import React from "react";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function SingleBlog() {
  const location = useLocation();

  const { data } = location.state;

  console.log(data);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex >
          <Image
            rounded={"md"}
            alt={"product image"}
            src={data.imagesrc}
            fit={"cover"}
            align={"center"}
          
          />
        </Flex>
        <Stack  spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}  className="text-blog">
            <Heading

              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              
            >
              {data.title}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text  className="text-blog comment" fontSize={"lg"}>{data.mainText}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                PUBLISHED ON : {data.datePublished}
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}></List>
                <List spacing={2}></List>
              </SimpleGrid>
            </Box>
            <Box></Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default SingleBlog;
