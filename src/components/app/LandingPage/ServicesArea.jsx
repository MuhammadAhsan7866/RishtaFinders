import { Box, Flex, Heading, Text, Image, Container } from "@chakra-ui/react";

// Reusable Card Component with dynamic text, images, and image-specific shadow effect
const CardSection = ({ imagePosition, heading, text, imageSrc, altText }) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      p={{ base: 4, md: 8 }}
      gap={{ base: 4, md: 8 }}
    >
      {/* Conditional Image Position */}
      {imagePosition === "left" && (
        <Box
          position="relative"
          w={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent="flex-start"
        >
          {/* Shadow Effect behind Image */}
          <Box
            pos="absolute"
            right={{base:'0px',sm:'0px',md:'-250px'}}
            bottom="0"
            transform="translateX(-50%)"
            width={{ base: "200px", sm: "300px", md: "400px", lg: "500px" }}
            height={{ base: "80px", sm: "120px", md: "160px", lg: "340px" }}
            bg="rgba(222, 182, 95, 0.3)"
            borderRadius="full"
            filter="blur(100px)"
            zIndex={0}
          />
          <Image
            src={imageSrc}
            alt={altText}
            maxW="90%"
            mb={{ base: 4, md: 0 }}
            zIndex={1}
          />
        </Box>
      )}
      {/* Text Content */}
      <Box w={{ base: "100%", md: "50%" }} mb={{ base: 6, md: 0 }}>
        <Heading
          as="h1"
          size={{ base: "lg", md: "xl" }}
          mb={4}
          color="white"
          textAlign={{ base: "center", md: "left" }}
          fontFamily={'Poppins'}
        >
          {heading}
        </Heading>
        <Text color="white" mb={6} textAlign={{ base: "center", md: "left" }}   fontFamily={'Poppins'}>
          {text}
        </Text>
      </Box>
      {/* Conditional Image Position */}
      {imagePosition === "right" && (
        <Box
          position="relative"
          w={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent={{base:'center',sm:'center',md:'flex-end'}}
        >
          {/* Shadow Effect behind Image */}
          <Box
            pos="absolute"
            left="-250px"
            bottom="0"
            transform="translateX(50%)"
            width={{ base: "200px", sm: "300px", md: "400px", lg: "500px" }}
            height={{ base: "80px", sm: "120px", md: "160px", lg: "340px" }}
            bg="rgba(222, 182, 95, 0.3)"
            borderRadius="full"
            filter="blur(100px)"
            zIndex={0}
            display={{base:'none',sm:'none',md:'none',xxxl:'none'}}
          />
          <Image
            src={imageSrc}
            alt={altText}
            maxW="80%"
            mb={{ base: 4, md: 0 }}
            zIndex={1}
          />
        </Box>
      )}
    </Flex>
  );
};

const ComplimentCard = () => {
  // Array of content for each card
  const cardContent = [
    {
      heading: "Compatibility Filter",
      text: "At Rishta Finder, our Compatibility Meter helps you find the perfect match based on shared values, interests, and goals!",
      imageSrc: "/phone-02.webp",
      altText: "Profile of Ahmet",
    },
    {
      heading: "Save profiles",
      text: "Find your perfect match with just a click. Save profiles effortlessly. Start your journey to a lifetime of happiness today!",
      imageSrc: "/phone-02.webp",
      altText: "Profile visibility boost",
    },
    {
      heading: "Find Your Perfect Match",
      text: "Unlock a month of complimentary access to explore 10 personalized rishtas tailored just for you. Our unmatched offer ensures you find connections that matter. Begin your quest for love today!",
      imageSrc: "/phone-02.webp",
      altText: "Personalized match suggestions",
    },
    {
      heading: "Maximize Engagement",
      text: "Rishta Finder enhances your social presence for better engagement and increased matchmaking opportunities. Showcase your profiles seamlessly on Facebook, Instagram, TikTok, YouTube, and WhatsApp channels with captivating posts and videos.",
      imageSrc: "/phone-02.webp",
      altText: "Chat features illustration",
    },
  ];

  return (
    <Box py={'60px'}>
        <Box  maxW={{base:'100%',sm:'100%',md:'100%',xxl:'65%'}} m={'auto'} mb={'70px'}>
      <Heading textAlign={'center'} color={'white'} fontFamily={'Poppins'} fontSize={{base:'30px',sm:'30px',md:'35px',xxl:'35px'}} >
      Innovative Solutions for Your
      <Text as={'span'} ml={'6px'} color={'#D0A03A'}  fontFamily={'Poppins'} fontSize={{base:'24px',sm:'24px',md:'35px',xxl:'35px'}} >Matchmaking Journey</Text>
      </Heading>
    
     
      </Box>
      <Box >
        {cardContent.map((content, index) => (
          <Box key={index} bg="black" pb="100px">
            <Container maxW="1170px" m="auto">
              <CardSection
                imagePosition={index % 2 === 0 ? "right" : "left"}
                heading={content.heading}
                text={content.text}
                imageSrc={content.imageSrc}
                altText={content.altText}
              />
            </Container>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ComplimentCard;
