import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import SilentAuction from "../../components/assets/SilentAuction.jpeg";

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
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SilentPage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
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
            <Heading className="text"> Silent Auction</Heading>
          </Text>

          <Text className="sA_Page text" color={"gray.500"} fontSize={"lg"}>
            Silent Auction Donated Items are a large part in helping us continue
            our wonderful programs for homeschooling families. We need and
            appreciate your support!For tax purposes, a tax deductible receipt
            is attached for your records. Black Homeschoolers of Central
            Florida, Inc. is a 501(c)3 organization. Annually, Black
            Homeschoolers of Central Florida has a Silent Auction in order to
            raise funds to continue our mission. This online auction is where
            you can find tempting and diverse auction items to keep or gift.
          </Text>
        </Stack>
        
        <Flex className="flex-image">
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
            className="imgS"
          />
        </Flex>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfuc16SIfaDkJuz97syP_A-qVQ4gspbt3yr1sD5JfxR0LYN7A/viewform">
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={SilentAuction}
          objectFit={"cover"}
          className="Silentcard"
        />
        </a>
      

        <Stack spacing={4}>
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
            <Heading className="text"> DONATE</Heading>
          </Text>
          <Text className="sA_Page text" color={"gray.500"} fontSize={"lg"}>
            Black Homeschoolers of Central Florida, Inc. is a 501c3 organization
            whose sole mission is to inform, educate, and help to inform,
            educate, and help other homeschooling families, namely those of
            color, in the Central Florida area and around the United States.
            Black Homeschoolers of Central Florida, Inc. was founded in 2009 by
            Rasheeda Denning. Our organization has been executing our mission by
            providing classes, guest speakers in career fields, field trips,
            hosting an annual graduation/awards ceremony, a lending library,
            informative communications, support, motivation, family to family
            connections, and connections to other support groups at the local
            and state level. Black Homeschoolers of Central Florida empowers our
            children and inspires parents to harness the power within to educate
            their children.
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
