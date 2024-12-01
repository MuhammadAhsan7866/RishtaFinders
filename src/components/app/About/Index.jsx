// pages/index.js
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Image,
  Img,
  Divider,
  Button,
} from "@chakra-ui/react";
import UpgradeSection from "../LandingPage/CTA";
import RishtaSection from "../LandingPage/GetRishta";
export default function AboutBanner() {
  return (
    <>
      <Box position={"relative"}>
        <Box
          as="section"
          bg="black"
          color="white"
          pt={{
            base: "130px",
            sm: "130px",
            md: "150px",
            lg: "150px",
            xxl: "200px",
            xxxl: "200px",
          }}
          pos={"relative"}
          px={{
            base: "30px",
            sm: "30px",
            md: "30px",
            lg: "40px",
            xxl: "0px",
            xxxl: "0px",
          }}
          pb={{
            base: "48px",
            sm: "48px",
            md: "150px",
            lg: "150px",
            xxl: "150px",
            xxxl: "100px",
          }}
        >
          <Container maxW="1300px" p={"0px"}>
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              pos={"relative"}
              zIndex={"1"}
            >
              <Box flex="1" mb={{ base: 8, md: 0 }} mr={{ md: 8 }}>
                <Flex align="center" mb={"45px"}>
                  {/* <Divider borderColor="white" w={"35%"} /> */}
                  <Img src="/bordernew.png" w={"50%"} />
                  <Text
                    mx={4}
                    fontSize="lg"
                    fontWeight="semibold"
                    color="white"
                    _dark={{ color: "gray.200" }}
                  >
                    About Rishta Finders
                  </Text>
                </Flex>
                <Heading
                  as="h1"
                  fontSize={{
                    base: "45px",
                    sm: "45px",
                    md: "45px",
                    lg: "50px",
                    xxl: "50px",
                    xxxl: "50px",
                  }}
                  my={6}
                  color={"white"}
                  fontWeight={"700"}
                  lineHeight={"55px"}
                  fontFamily={"Poppins"}
                >
                  Discover the Difference with Rishta Finder!
                </Heading>

                <Text
                  fontSize={{
                    base: "16px",
                    sm: "16px",
                    md: "16px",
                    lg: "17px",
                    xxl: "17px",
                    xxxl: "17px",
                  }}
                  lineHeight={"32px"}
                  fontWeight={"400"}
                  mb={6}
                  mt={"35px"}
                  color={"white"}
                  fontFamily={"Poppins"}
                >
                  At Rishta Finder, we stand out with our commitment to your
                  journey of finding love. Enjoy the first month of our service
                  for free with care and attention to help you navigate the
                  world of relationships. Our platform offers nominal charges
                  for continued access to quality matches.
                </Text>
                <Text
                  fontSize={{
                    base: "16px",
                    sm: "16px",
                    md: "16px",
                    lg: "17px",
                    xxl: "17px",
                    xxxl: "17px",
                  }}
                  lineHeight={"32px"}
                  fontWeight={"400"}
                  mb={6}
                  mt={"35px"}
                  color={"white"}
                  fontFamily={"Poppins"}
                >
                  We pride ourselves on our strong social presence, connecting
                  you with a vibrant community open to meaningful connections.
                  With daily new profiles, your options are constantly
                  expanding. Experience faster communication channels that make
                  connecting and engaging with potential partners seamless. Join
                  Rishta Finder today and take a step towards finding your
                  perfect match!"
                </Text>
              </Box>
              <Box flex="1" display={"flex"} justifyContent={"center"}>
                <Image
                  src="/about-shadi.pk-hero-image.svg"
                  alt="bannerphoto"
                  rounded="lg"
                  shadow="lg"
                />
              </Box>
            </Flex>
          </Container>
          <Img
            pos={"absolute"}
            top={"0"}
            right={"0"}
            zIndex={"0"}
            src="/lyerbg.svg"
            alt="lyerbg"
            maxW={"50%"}
            maxH={"100%"}
          />
        </Box>
        <Box
          pos="absolute"
          left="0"
          top={"0"}
          transform="translateX(-50%)"
          width={{ base: "400px", md: "634px" }}
          height={{ base: "160px", md: "340px" }}
          bg="rgba(222, 182, 95, 0.3)"
          borderRadius="full"
          filter="blur(100px)"
          zIndex={0}
        />
      </Box>
      <RishtaSection/>
    </>
  );
}
