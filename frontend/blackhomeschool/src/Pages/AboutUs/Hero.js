import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import "../HomeInfo/HomeInfo.css";
  import { ScaleFade } from "@chakra-ui/react";
  import "./Hero.css"
  
  export default function Hero({url,name}) {
    return (
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          url
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        className="hero"
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <ScaleFade initialScale={0.9} in={true}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                className="text"
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                {name}
              </Text>
            </ScaleFade>
  
            <Stack direction={"row"}></Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }
  