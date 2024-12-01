import {
  Box,
  Button,
  Divider,
  Text,
  VStack,
  Heading,
  Center,
  Img,
  Flex,
} from "@chakra-ui/react";

const RishtaSection = () => {
  return (
    <Box
      bg="black"
      pb="100px"
      px={{ base: "20px", md: "40px" }} // Responsive padding
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box width="full" maxW="container.lg">
        {" "}
        {/* Responsive max width */}
        <Flex justifyContent="center" alignItems="center" mb="30px">
          <Img src="/top-icon.svg" /> {/* Responsive size */}
        </Flex>
        <Center my={6}>
          <Heading
            as="h2"
            fontSize={{ base: "18px", md: "25px", lg: "25px" }} // Responsive font size
            fontWeight="400"
            color="white"
            fontFamily="Poppins"
            textAlign="center"
            lineHeight={{ base: "30px", md: "40px", lg: "45px" }} // Responsive line height
          >
            Rishta Finder most convenient online destination to find spouse.
            Enjoy a free one-month trial with daily verified profiles and
            simplified connections through social media presence for easier
            rishta discovery.
          </Heading>
        </Center>
        <Center>
          <Button
            sx={{
              background:
                "linear-gradient(180deg, rgb(235, 187, 84) 0%, rgb(184, 137, 35) 100%)",
              borderRadius: "50px",
              fontFamily: "Poppins",
              fontSize: { base: "14px", md: "16px" }, // Responsive font size
              fontWeight: "600",
              py: { base: "8px", md: "10px" }, // Responsive padding
              px: { base: "25px", md: "35px" }, // Responsive padding
              color: "black",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                background:
                  "linear-gradient(180deg, rgb(235, 187, 84) 0%, rgb(184, 137, 35) 100%)",
              },
            }}
          >
            Get Your Rista
          </Button>
        </Center>
        <Flex justifyContent="center" alignItems="center" mt="30px">
          <Img src="/bottom-icon.svg" /> {/* Responsive size */}
        </Flex>
      </Box>
    </Box>
  );
};

export default RishtaSection;
