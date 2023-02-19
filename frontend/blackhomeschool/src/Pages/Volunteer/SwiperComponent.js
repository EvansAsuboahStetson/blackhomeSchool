import { useState } from "react";
import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const images = [
    {
        src: "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
        alt: "Image 1",
    },
    {
        src: "https://wallpapercave.com/wp/wp2599594.jpg",
        alt: "Image 2",
    },
    {
        src: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Jungle-HD-Images.jpg",
        alt: "Image 3",
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
                h="400px"
                position="relative"
                _hover={{ opacity: "0.8" }}
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
                    {images[activeIndex].alt}
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
