import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import { FaFileDownload } from "react-icons/fa";
import { AiOutlineForm } from "react-icons/ai";
import { HiFolderDownload } from "react-icons/hi";

import "./Donate.css";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text className="text" fontWeight={600}>
        {text}
      </Text>
    </Stack>
  );
};

export default function SCholarForms() {
  return (
    <Container maxW={"5xl"} py={12} className="scholarcontainer">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 1 }} spacing={10}>
        <Stack className="text" spacing={8}>
          <Heading className="text">Scholarship Forms and Links</Heading>
          <Text className="text" color={"gray.500"} fontSize={"lg"}>
            You may want to download the pdf version of the forms or fill them
            online using the links below
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdxiXtsH7D73e_X6RsrKsBkG0tBzy3u0gNZv3waSf2TmfMbrg/viewform"
              isExternal
            >
              <Feature
                icon={
                  <Icon as={AiOutlineForm} color={"yellow.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"ONLINE SPONSORSHIP FORM"}
              />
            </Link>

            <Link
              href="https://drive.google.com/file/d/1hW4J4XYbBkWUM6bVRmRVIl25e8inEnXK/view"
              isExternal
            >
              <Feature
                className="text"
                icon={
                  <Icon as={FaFileDownload} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"BHCFL Community Builder Sponsorship Form"}
                fontSize="xl"
              />
            </Link>
            <Link
              isExternal
              href="https://www.blackhomeschoolerscfl.com/Community%20Builder%20Sponsorships-3-5.pdf"
            >
              <Feature
                icon={
                  <Icon
                    as={HiFolderDownload}
                    color={"purple.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                fontSize="3xl"
                text={"BHCFL Building Fund!"}
              />
            </Link>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
