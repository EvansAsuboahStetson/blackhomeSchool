import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./checkout.css"

export default function MenuIcon({setSize}) {
  const [selected, setSelected] = useState("Size");

  function handleSubmit(items) {
   setSelected(items)
   setSize(items)
  }
  const menu_buttons = [
    "Kids Sm",
    "Kids M",
    "Kids L",
    "Kids XL",
    "Youth Sm",
    "Youth M",
    "Youth L",
    "Youth XL",
    "Adult Sm",
    "Adult M",
    "Youth L",
    "Youth XL",
  ];
  return (
    <Menu px={5} py={3}   transition="all 0.2s"
    borderRadius="md"
    borderWidth="1px"
    _hover={{ bg: "gray.400" }}
    _expanded={{ bg: "blue.400" }}
    _focus={{ boxShadow: "outline" }}
    className="text-blog"
   >
      <MenuButton
       colorScheme="pink"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        px={4}
        py={2}
        
     
      
      >
        {selected}
      </MenuButton>
      <MenuList className="text-blog" >
        {menu_buttons.map((items) => {
          return (
            <MenuItem  onClick={() => handleSubmit(items)}>{items}</MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
