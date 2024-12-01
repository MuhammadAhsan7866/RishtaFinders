import {
  Box,
  Flex,
  Container,
  Img,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function MissionSection() {
  const textStyles = {
    fontSize: { base: "16px", lg: "17px" },
    lineHeight: "32px",
    fontWeight: "400",
    color: "white",
    fontFamily: "Poppins",
    mb: 6,
    mt: "35px",
  };

  return (
    <Box position="relative">
      <Box
        as="section"
        bg="black"
        color="white"
        pt={{ base: "130px", lg: "150px", xxxl: "200px" }}
        px={{ base: "30px", lg: "40px", xxxl: "0px" }}
        pb={{ base: "48px", lg: "150px", xxxl: "100px" }}
        position="relative"
      >
        <Container maxW="1300px" p="0px">
          <Flex direction={{ base: "column", md: "row" }} align="center" position="relative" zIndex="1">
            <Box flex="1" mb={{ base: 8, md: 0 }} mr={{ md: 8 }}>
              <Flex align="center" mb="45px">
                <Img src="/bordernew.png" w="50%" />
                <Text
                  mx={4}
                  fontSize="lg"
                  fontWeight="semibold"
                  color="white"
                  _dark={{ color: "gray.200" }}
                >
                  Our Vision
                </Text>
              </Flex>
              <Heading
                as="h1"
                fontSize={{ base: "45px", lg: "50px" }}
                my={6}
                color="white"
                fontWeight="700"
                lineHeight="55px"
                fontFamily="Poppins"
              >
                Discover the Difference with Rishta Finder!
              </Heading>
              <Text {...textStyles}>
                At Rishta Finder, we stand out with our commitment to your journey of finding love.
                Enjoy the first month of our service for free with care and attention to help you
                navigate the world of relationships. Our platform offers nominal charges for
                continued access to quality matches.
              </Text>
              <Text {...textStyles}>
                We imagine a world where love is limitless, cultures come together, and relationships
                are built on respect and shared values. Our aim is to help you find true compatibility
                and create a community where everyone can find their perfect match.
              </Text>
              <Text {...textStyles}>
                With new ideas, care, and a focus on real connections, we are here to transform
                matchmaking. Join us to see how relationships can be meaningful, special, and nurtured.
                Let's start a journey where every match leads to a lifetime of happiness, moving away
                from the idea of perfection.
              </Text>
            </Box>
            <Box flex="1" display="flex" justifyContent="center">
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
          position="absolute"
          top="0"
          right="0"
          zIndex="0"
          src="/lyerbg.svg"
          alt="lyerbg"
          maxW="50%"
          maxH="100%"
        />
      </Box>
      <Box
        position="absolute"
        left="0"
        top="0"
        transform="translateX(-50%)"
        width={{ base: "400px", md: "634px" }}
        height={{ base: "160px", md: "340px" }}
        bg="rgba(222, 182, 95, 0.3)"
        borderRadius="full"
        filter="blur(100px)"
        zIndex={0}
      />
    </Box>
  );
}
