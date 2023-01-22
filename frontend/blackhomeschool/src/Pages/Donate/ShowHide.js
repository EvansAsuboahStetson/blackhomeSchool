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
import { AiOutlineUp } from "react-icons/ai";

export default function ShowHide({
  title,
  children,
  iconBg,
  icon,
  list,
  components,
}) {
  const [isOpened, setIsOpened] = useState(false);
  console.log(components);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <div className="box">
      <div className="boxyContainer">
        <div className="boxTitle" onClick={toggle}>
          <div className="text title">{title}</div>
          <div>
            {isOpened ? (
              icon
            ) : (
              <Icon as={AiOutlineUp} color={"gray.500"} w={5} h={5} />
            )}
          </div>
        </div>
        {isOpened && <div className="boxContent text">{components}</div>}
      </div>
    </div>
  );
}
