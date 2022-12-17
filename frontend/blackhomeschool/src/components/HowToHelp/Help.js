import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import  "../../Pages/HomeInfo/HomeInfo.css";


const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text  className="text" fontWeight={600}>{title}</Text>
      <Text  className="text" color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function HowYouHelp() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
       
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Send a Donation"}
          text={
            "Giving online has never been more secure, convenient or hassle-free with our one-click donation. You can also help us make a difference by texting BHCFL to 44-321 to donate"
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Become a Volunteer"}
          text={
            "You can get involved today by becoming a volunteer. Sign up and you will be joining a group of change-makers, a network strong enough to impact positive change in the lives of children"
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Give Scholarship"}
          text={
            "Your gift will help equip our children with necessary resources, training and education while offering the promise of a brighter future. You can make a difference today by signing up."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
