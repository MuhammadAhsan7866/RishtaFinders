import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  ButtonGroup,
  Img,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [headerStyles, setHeaderStyles] = useState({
    backgroundColor: "rgba(12, 12, 12, 0.8)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  });

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHeaderStyles({
        backgroundColor: "rgba(12, 12, 12, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      });
    } else {
      setHeaderStyles({
        backgroundColor: "rgba(12, 12, 12, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        ...headerStyles,
        position: "fixed",
        width: "100%",
        opacity: 1,
        zIndex: 10,
      }}
      px={4}
    >
      <Flex
        h={"80px"}
        alignItems="center"
        justifyContent="space-between"
        maxW={"1400px"}
        m={"auto"}
        p={"12px"}
      >
        <Box w={"25%"}>
          <Link href="http://localhost:3000/">
            {/* <Text
              bgGradient="linear(0deg, rgb(184, 137, 35) 0%, rgb(222, 182, 95) 100%)"
              bgClip="text"
              fontSize="30px"
              fontWeight="bold"
              fontFamily={"Merriweather"}
            >
              Shaadi PK
            </Text> */}
            <Img src="/rishtalogo.png" w={"70%"} />
          </Link>
        </Box>

        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <HStack
            as="nav"
            spacing={4}
            display={{
              base: "none",
              md: "none",
              lg: "block",
              xxl: "block",
              xxxl: "block",
            }}
          >
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                color="white"
                bg={"transparent"}
                _hover={{ color: "gray.400" }}
                _focus={{ boxShadow: "none", bg: "transparent" }}
                _active={{ bg: "transparent" }}
                fontWeight={"normal"}
              >
                About
              </MenuButton>
              <MenuList bg="black" color="white">
                <MenuItem
                  as={Link}
                  href="/OurVision"
                  _hover={{
                    bg: "linear-gradient(180deg, rgb(235, 187, 84) 0%, rgb(184, 137, 35) 100%)",
                    color: "black",
                  }}
                  bg={'black'}
                >
                  Our Vision
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="/SupportMarriage"
                  _hover={{
                    bg: "linear-gradient(180deg, rgb(235, 187, 84) 0%, rgb(184, 137, 35) 100%)",
                    color: "black",
                  }}
                  bg={'black'}
                >
                  Support a Marriage
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="/BankAccount"
                  _hover={{
                    bg: "linear-gradient(180deg, rgb(235, 187, 84) 0%, rgb(184, 137, 35) 100%)",
                    color: "black",
                  }}
                  bg={'black'}
                >
                  Safety and Security
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="/BrideGuide"
                  _hover={{
                    bg: "linear-gradient(180deg, rgb(235, 187, 84) 0%, rgb(184, 137, 35) 100%)",
                    color: "black",
                  }}
                  bg={'black'}
                >
                  Bride Guide
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="/GroomGuide"
                  _hover={{
                    bg: "linear-gradient(180deg, rgb(235, 187, 84) 0%, rgb(184, 137, 35) 100%)",
                    color: "black",
                  }}
                  bg={'black'}
                >
                  Groom Guide
                </MenuItem>
              </MenuList>
            </Menu>

            <Link href="#">
              <Button
                color="white"
                bg={"transparent"}
                colorScheme="transparent"
                aria-label="Contact Us"
                _hover={{ color: "gray.400" }}
              >
                Success Story
              </Button>
            </Link>
            <Link href="#">
              <Button
                color="white"
                bg={"transparent"}
                colorScheme="transparent"
                aria-label="Contact Us"
                _hover={{ color: "gray.400" }}
                fontWeight={"normal"}
              >
                Plans
              </Button>
            </Link>
            <Link href="#">
              <Button
                color="white"
                bg={"transparent"}
                colorScheme="transparent"
                aria-label="Contact Us"
                _hover={{ color: "gray.400" }}
                fontWeight={"normal"}
              >
                Events
              </Button>
            </Link>
            <Link href="#">
              <Button
                color="white"
                bg={"transparent"}
                colorScheme="transparent"
                aria-label="Contact Us"
                _hover={{ color: "gray.400" }}
                fontWeight={"normal"}
              >
                Contact Us
              </Button>
            </Link>
          </HStack>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent={"center"}
          display={{
            base: "none",
            md: "none",
            lg: "block",
            xxl: "block",
            xxxl: "block",
          }}
        >
          <ButtonGroup
            spacing={4}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Link href="https://wa.me/message/YSBWOOKTVDLTC1" isExternal>
              <Button
                bgGradient="linear(180deg, rgb(38, 38, 38) 0%, rgb(12, 12, 12) 100%)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                px="35px"
                borderRadius="50px"
                h="45px"
                colorScheme="black"
                boxShadow="rgba(255, 255, 255, 0) 0px 1px 15px 0px"
                opacity="1"
                // _hover={{ bg: "black", color: "white", border: "none" }}
                color={"white"}
              >
                Log In
              </Button>
            </Link>

            <Link href="/NifForm">
              <Button
                sx={{
                  background:
                    "linear-gradient(180deg, rgb(235, 187, 84) 0%, rgb(184, 137, 35) 100%)",
                  borderRadius: "50px",
                  colorScheme: "rgb(184, 137, 35)",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "600",
                  py: "10px",
                  px: "35px",
                  color: "black",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                    background:
                      "linear-gradient(180deg, rgb(235, 187, 84) 0%, rgb(184, 137, 35) 100%)",
                  },
                }}
              >
                Register
              </Button>
            </Link>
          </ButtonGroup>
        </Flex>

        <IconButton
          size="md"
          icon={<HamburgerIcon color="white" />}
          aria-label="Open Menu"
          display={{
            base: "block",
            md: "block",
            lg: "none",
            xxl: "none",
            xxxl: "none",
          }}
          onClick={onOpen}
          bg={"transparent"}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <Stack as="nav" spacing={4}>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  w="100%"
                  bg="transparent"
                  _hover={{ color: "gray.400" }}
                  _focus={{ boxShadow: "none", bg: "transparent" }}
                  _active={{ bg: "transparent" }}
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  About
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="/OurVision">
                    Our Vision
                  </MenuItem>
                  <MenuItem as={Link} href="/SupportMarriage">
                    Support a Marriage
                  </MenuItem>
                  <MenuItem as={Link} href="/BankAccount">
                    Safety and Security
                  </MenuItem>
                  <MenuItem as={Link} href="/BrideGuide">
                    Bride Guide
                  </MenuItem>
                  <MenuItem as={Link} href="/GroomGuide">
                    Groom Guide
                  </MenuItem>
                </MenuList>
              </Menu>

              <Link href="/#Plans">
                <Button
                  bg="transparent"
                  colorScheme="transparent"
                  w="100%"
                  textAlign="left"
                  _hover={{ color: "gray.400" }}
                >
                  Plans
                </Button>
              </Link>
              <Link href="/#">
                <Button
                  bg="transparent"
                  colorScheme="transparent"
                  w="100%"
                  textAlign="left"
                  _hover={{ color: "gray.400" }}
                >
                  Events
                </Button>
              </Link>
              <Link href="/#">
                <Button
                  bg="transparent"
                  colorScheme="transparent"
                  w="100%"
                  textAlign="left"
                  _hover={{ color: "gray.400" }}
                >
                  Success Story
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
