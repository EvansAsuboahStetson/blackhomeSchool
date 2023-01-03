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
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import "./Donate.css";

// Settings for the slider
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
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  ];
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
      logo:"https://www.hcc-offm.org/wp-content/uploads/2022/04/Hispanic-Federation-Triangle-Logo-FPP-200x93-1.png",
    },
    {
      logo:"https://www.hcc-offm.org/wp-content/uploads/2022/04/rollins.png"
    },
    {
      logo:"https://www.hcc-offm.org/wp-content/uploads/2022/04/sh.png"
    },
    {
      logo:"https://www.hcc-offm.org/wp-content/uploads/2022/04/rollins.png"
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
        <div className="firstCard">
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
        <div className="secondCard">
          <SimpleGrid
            spacing={8}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              lg: "repeat(5, 1fr)",
              md: "repeat(3, 1fr)",
            }}>
          {secondSystem.map((product)=>(
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
