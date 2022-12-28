import { ReactNode } from "react";
import "./Navbar.css";
import { Link as RouteLink } from "react-router-dom";

import {
  Box,
  Text,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = [
  "Home",
  "About",
  "Join/Renew",
  "Payments",
  "Gear",
  "Blog",
  "Donate",
  "Buy Here",
];
const linkie = [
  {
    linkName: "Home",
    href: "/",
  },
  {
    linkName: "About",
    href: "/aboutUs",
  },
  {
    linkName: "Join/Review",
    href: "/joinUs",
  },
  {
    linkName: "Payments",
    href: "/payments",
  },
  {
    linkName: "Gear",
    href: "/gear",
  },
  {
    linkName: "Blog",
    href: "/blog",
  },
  {
    linkName: "Donate",
    href: "/donate",
  },
  {
    linkName: "Buy Here",
    href: "/buyHere",
  },
];

const NavLink = ({ children }) => (
  <Link
    className="text"
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue(useColorModeValue("rgb(255, 244, 242)"))}
        px={16}
        className="boxy"
      >
        <Flex h={28} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Avatar
                size={"m"}
                src={
                  "https://www.hcc-offm.org/wp-content/uploads/2019/02/hope_logo_b_w_regular.png"
                }
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {linkie.map((link,index) => (
                <RouteLink  key={index} to={link.href}>
                  <NavLink>{link.linkName}</NavLink>
                </RouteLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {/* <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button> */}
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
