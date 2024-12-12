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
export default function HomeBanner() {
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
            md: "0px",
            lg: "150px",
            xxl: "150px",
            xxxl: "100px",
          }}
        >
          <Container maxW="1240px" p={"0px"}>
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              pos={"relative"}
              zIndex={"1"}
            >
              <Box flex="1" mb={{ base: 8, md: 0 }} mr={{ md: 8 }}>
                <Flex align="center" mb={"45px"}>
                  {/* <Divider borderColor="white" w={"35%"} /> */}
                  <Img
                    src="/bordernew.png"
                    w={{ base: "40%", sm: "40%", md: "50%" }}
                  />
                  <Text
                    mx={4}
                    fontSize={{ base: "14px", sm: "14px", md: "lg" }}
                    fontWeight="semibold"
                    color="white"
                    _dark={{ color: "gray.200" }}
                  >
                    Why NOT Almost Free
                  </Text>
                </Flex>
                <Heading
                  as="h1"
                  fontSize={{
                    base: "30px",
                    sm: "30px",
                    md: "35px",
                    lg: "45px",
                    xxl: "50px",
                    xxxl: "50px",
                  }}
                  my={6}
                  color={"white"}
                  fontWeight={"700"}
                  lineHeight={{
                    base: "40px",
                    sm: "40px",
                    md: "45px",
                    xxl: "55px",
                  }}
                  fontFamily={"Poppins"}
                >
                  Rishta Find karna huwa Boohat Aasan
                  <br />
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
                  Pakistan NO.1 most Convenient Matrimonial Platform Easy to
                  find National and International Match Are you Looking for
                  perfect mate?
                </Text>
                <Text
                  bgClip="text"
                  color={"white"}
                  fontWeight={"900"}
                  fontSize={"17px"}
                  lineHeight={"32px"}
                  fontFamily={"Poppins"}
                  mb={"30px"}
                >
                  “Find Your Life Partner Now!”
                </Text>
                <Flex
                  gap={4}
                  justifyContent={"flex-start"}
                  align="center"
                  my={8}
                >
                  <Button
                    px="35px"
                    borderRadius="50px"
                    h="45px"
                    colorScheme="black"
                    boxShadow="rgba(255, 255, 255, 0) 0px 1px 15px 0px"
                    opacity="1"
                    // _hover={{ bg: "black", color: "white", border: "none" }}
                    color={"black"}
                    bg={"white"}
                    fontFamily={"Poppins"}
                    fontSize={"16px"}
                    fontWeight={"500"}
                    py={"10px"}
                    _hover={{
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)", // box shadow on hover
                    }}
                  >
                    Log In
                  </Button>

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
                      transition: "box-shadow 0.3s ease", // smooth transition for hover effect
                      "&:hover": {
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)", // box shadow on hover
                        background:
                          "linear-gradient(180deg, rgb(235, 187, 84) 0%, rgb(184, 137, 35) 100%)",
                      },
                    }}
                  >
                    Register
                  </Button>
                </Flex>
              </Box>
              <Box flex="1" display={"flex"} justifyContent={"center"}>
                <Image
                  src="/success-story-hero-image.png"
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
        {/* <Box
        pos="absolute"
        right="-192px"
        bottom={'-71px'}
        transform="translateX(-50%)"
        width={{ base: "400px", md: "500px" }}
        height={{ base: "160px", md: "340px" }}
        bg="rgba(222, 182, 95, 0.3)"
        borderRadius="full"
        filter="blur(100px)"
        zIndex={0}
      /> */}
      </Box>
    </>
  );
}
