import { React, useState } from "react";
import {
  Box,
  Heading,
  IconButton,
  Text,
  useBreakpointValue,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import "./SilentAuction.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Sponsor = ({ cardsSystem }) => {
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const groups = cardsSystem.reduce((acc, element, index) => {
    if (!acc[Math.floor(index / 5)]) {
      acc[Math.floor(index / 5)] = [];
    }
    acc[Math.floor(index / 5)].push(element);
    return acc;
  }, []);

  return (
    <Box
      position={"relative"}
      h={[500, 500, 500]}
      width={"full"}
      overflow={"auto"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>

      <Heading>
        <Text className="text marg">Silent Auction Partners</Text>
      </Heading>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {groups.map((group, index) => (
          <SimpleGrid
            spacing={8}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              lg: "repeat(5, 1fr)",
              md: "repeat(3, 1fr)",
            }}
          >
            {console.log(index)}
            <div key={index} className="groups">
              {group.map((element, i) => (
                <Box key={i} className="single_group">
                  <Image src={element.logo} alt="Dan Abramov" />
                </Box>
              ))}
            </div>
          </SimpleGrid>
        ))}
      </Slider>
    </Box>
  );
};

export default Sponsor;
