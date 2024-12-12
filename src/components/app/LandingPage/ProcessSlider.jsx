import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Divider,
  Container,
} from "@chakra-ui/react";

export default function SignupSteps() {
  return (
    <Container maxW={"1350px"} p={0}>
      <Box maxW={"850px"} m={"auto"}>
        <Heading
          textAlign={"center"}
          color={"white"}
          fontFamily={"Poppins"}
          fontSize={{base:'26px',sm:'26px',md:'35px'}}
        >
          Finding Your Perfect Match
          <Text
            as={"span"}
            ml={"6px"}
            color={"#D0A03A"}
            fontFamily={"Poppins"}
            fontSize={{base:'30px',sm:'30px',md:'38px'}}
          >
            Just Got Easy!
          </Text>
        </Heading>

        <Text
          textAlign={"center"}
          color={"white"}
          fontFamily={"Poppins"}
          fontSize={"18px"}
          mb={"100px"}
          mt={"40px"}
        >
          User-friendly matrimonial platform connects you with like-minded
          individuals who share your values and aspirations, finding your ideal
          partner is just a click away.
        </Text>
      </Box>

      <Flex justify="space-between" align="center" flexDir={{base:'column',sm:'column',md:'row'}} gap={{base:'20px',sm:'20px'}}>
        {/* Step 1: Signup */}
        <Flex direction="column" align="center">
          <Image
            aria-hidden="true"
            alt="signup-icon"
            src="/Directconnect.png"
            w={"20%"}
            mb={"20px"}
          />
          <Heading
            as="h3"
            fontSize="lg"
            fontWeight="500"
            color={"white"}
            fontFamily={"Poppins"}
            mb={"20px"}
          >
            Signup
          </Heading>
          <Text
            color="white"
            textAlign="center"
            fontFamily={"Poppins"}
            fontWeight={"500"}
            lineHeight={"32px"}
          >
            Create an account on Shadi.Pk, providing your basic information and
            preferences to initiate your journey.
          </Text>
        </Flex>

        {/* Arrow */}
        <Flex align="center">
          <Box mx={2}>
            <Image
              aria-hidden="true"
              alt="arrow-icon"
              src="/slider.png"
              w={"65%"}
              display={{ base: "none", sm: "none", md: "none", xxl: "block" }}
            />
          </Box>
        </Flex>

        {/* Step 2: Complete Profile */}
        <Flex direction="column" align="center">
          <Image
            aria-hidden="true"
            alt="profile-icon"
            src="/Advancesearch.png"
            w={"20%"}
            mb={2}
          />
          <Heading
            as="h3"
            fontSize="lg"
            fontWeight="500"
            color={"white"}
            fontFamily={"Poppins"}
            mb={"20px"}
          >
            Complete Profile
          </Heading>
          <Text
            color="white"
            textAlign="center"
            fontFamily={"Poppins"}
            fontWeight={"500"}
            lineHeight={"32px"}
          >
            Share essential personal details and interests, forming an appealing
            and informative profile.
          </Text>
        </Flex>

        {/* Arrow */}
        <Flex align="center">
          <Box mx={2}>
            <Image
              aria-hidden="true"
              alt="arrow-icon"
              src="/slider.png"
              w={"65%"}
              display={{ base: "none", sm: "none", md: "none", xxl: "block" }}
            />
          </Box>
        </Flex>

        {/* Step 3: Search Matches */}
        <Flex direction="column" align="center">
          <Image
            aria-hidden="true"
            alt="search-icon"
            src="/Verifyprofile.png"
            w={"20%"}
            mb={2}
          />
          <Heading
            as="h3"
            fontSize="lg"
            fontWeight="500"
            color={"white"}
            fontFamily={"Poppins"}
            mb={"20px"}
          >
            Search Matches
          </Heading>
          <Text
            color="white"
            textAlign="center"
            fontFamily={"Poppins"}
            fontWeight={"500"}
            lineHeight={"32px"}
          >
            Utilize user-friendly tools to explore profiles, applying filters to
            align with your preferences.
          </Text>
        </Flex>
        {/* Arrow */}
        <Flex align="center">
          <Box mx={2}>
            <Image
              aria-hidden="true"
              alt="arrow-icon"
              src="/slider.png"
              w={"65%"}
              display={{ base: "none", sm: "none", md: "none", xxl: "block" }}
            />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
