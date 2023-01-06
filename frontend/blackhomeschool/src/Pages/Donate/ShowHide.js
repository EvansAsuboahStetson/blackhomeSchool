import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Divider,
  Icon,
  useColorModeValue,
  Link,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./ShowHide.css";
import { AiOutlineDown } from "react-icons/ai";

export default function ShowHide({ title, children, iconBg, icon,list }) {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <div className="box">
      <div className="boxyContainer">
        <div className="boxTitle text" onClick={toggle}>
          <div className="text">{title}</div>
          <div>
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
          </div>
        </div>
        {isOpened && <div className="boxContent text">{list}</div>}
      </div>
    </div>
  );
}
