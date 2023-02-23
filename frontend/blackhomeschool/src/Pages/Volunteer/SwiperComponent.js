import { useState } from "react";
import { Box, Image, Text, Flex, Button ,chakra} from "@chakra-ui/react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Lawrencia from "../../components/assets/Lawrencia.jpg"
import Simon from "../../components/assets/Simons.jpg"
import Evans from "../../components/assets/Evans.JPG"
const images = [
    {
        src: Lawrencia,
        alt: "Teaching kids has always been a passion of mine. When I was young I was home schooled so having this opportunity to teach kids is amazing",
        name:"Lawrencia Agbovi",
        role:"Stetson Bonner Program"
    },
    {
        src:Simon,
        alt: "I love volunteering for black home school. It makes my heart smile when I see the improvement of kids academically and their personal growh",
        name:"Simon Doku",
        role:"UCF Program"
    },
    {
        src: Evans,
        alt: "It is So fun to work with the kids",
        name:"Evans Asuboah",
        role:"Stetson Bonner Program"
    },
];

export default function SwiperComponent() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
            <Box
                w="100%"
                h={["500px", null, null, "600px"]}
                position="relative"
                _hover={{ opacity: "0.9" }}
                onMouseEnter={() => {
                    document.querySelector("#prev-button").style.visibility = "visible";
                    document.querySelector("#next-button").style.visibility = "visible";
                }}
                onMouseLeave={() => {
                    document.querySelector("#prev-button").style.visibility = "hidden";
                    document.querySelector("#next-button").style.visibility = "hidden";
                }}
            >
                <Image
                    src={images[activeIndex].src}
                    alt={images[activeIndex].alt}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                />
                <Text
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    bg="rgba(0, 0, 0, 0.5)"
                    color="white"
                    p="1rem"
                    opacity="0.8"
                    textAlign="center"
                >
                    <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
        <chakra.p
          fontFamily={'Inter'}
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}
          className="text">

           {images[activeIndex].alt}
        </chakra.p>
        <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
            {images[activeIndex].name}
  
          <chakra.span
          className="text"
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={'white.500'}>
            {' '}
            - {images[activeIndex].role}
          </chakra.span>
        </chakra.p>
      </Flex>
                  
                </Text>
                <Button
                    id="prev-button"
                    position="absolute"
                    left="0"
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={handlePrevious}
                 
                    size="lg"
                    ml="1rem"
                    visibility="hidden"
                >
                    <div className="icon-container">
                        <GrPrevious color="#fff" />
                    </div>
                </Button>
                <Button
                    id="next-button"
                    position="absolute"
                    right="0"
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={handleNext}
                   
                   
                    size="lg"
                    mr="1rem"
                    visibility="hidden"

                >
                    <div className="icon-container">
                        <GrNext color="#fff" />
                    </div>
                </Button>
            </Box>
        </Flex>
    );
}
