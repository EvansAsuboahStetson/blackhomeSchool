import React, { useState } from "react";
import {
  Box,
  Heading,
  IconButton,
  Text,
  useBreakpointValue,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import Slider from "react-slick";
import "./Donate.css";


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

export default function CarouselPage() {

  const [slider, setSlider] = useState(null);


  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });


  const cardsSystem = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg",
    },
    {
      logo: "https://cdn.mos.cms.futurecdn.net/5StAbRHLA4ZdyzQZVivm2c-970-80.jpg",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg",
    },
    {
      logo: "https://cdn.mos.cms.futurecdn.net/5StAbRHLA4ZdyzQZVivm2c-970-80.jpg",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg",
    },
  ];

  const secondSystem = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Seal_of_Daytona_State_College.png/220px-Seal_of_Daytona_State_College.png",
    },

    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/Hispanic-Federation-Triangle-Logo-FPP-200x93-1.png",
    },
    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/rollins.png"
    },
    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/sh.png"
    },
    {
      logo: "https://www.hcc-offm.org/wp-content/uploads/2022/04/rollins.png"
    },
  ];
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
      {/* Left Icon */}
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
      {/* Right Icon */}
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
      {/* Slider */}
      <Heading>
        <Text className="text marg">Community Supporters & Partners</Text>
      </Heading>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        <div>
          <SimpleGrid
            spacing={8}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              lg: "repeat(5, 1fr)",
              md: "repeat(3, 1fr)",
            }}
          >
            {cardsSystem.map((product, index) => (
              <Box>
                <Image src={product.logo} alt="Dan Abramov" />
              </Box>
            ))}
          </SimpleGrid>
        </div>
        <div >
          <SimpleGrid
            spacing={8}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              lg: "repeat(5, 1fr)",
              md: "repeat(3, 1fr)",
            }}>
            {secondSystem.map((product) => (
              <Box>
                <Image src={product.logo} alt="Dan Abramov" />
              </Box>
            ))}
          </SimpleGrid>

        </div>
      </Slider>
    </Box>
  );
}
