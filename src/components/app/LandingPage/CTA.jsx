import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function UpgradeSection() {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      py={{ base: "100px", md: "150px" }}
      bg="black" 
      color="white"
      pos="relative"
      textAlign="center"
    >
      {/* Background Box */}
      <Box
        pos="absolute"
        bottom="-200px"
        left="50%"
        transform="translateX(-50%)"
        width={{ base: "300px", md: "634px" }}
        height={{ base: "160px", md: "340px" }}
        bg="rgba(222, 182, 95, 0.3)"
        borderRadius="full"
        filter="blur(100px)"
        zIndex={0}
      />

      <Heading 
        as="h1" 
        size={{ base: "xl", md: "2xl" }}
        mb={2} 
        fontWeight="bold"
        bgGradient="linear(to-r, gray.400, white)"
        bgClip="text"
        zIndex={1}
      >
        No Time to Waste!
      </Heading>

      <Heading 
        as="h2" 
        size={{ base: "lg", md: "xl" }} 
        mb={2} 
        fontWeight="semibold"
        bgGradient="linear(to-r, #B88923, #DEB65F)"
        bgClip="text"
        zIndex={1}
      >
       Find Your Life Patner
      </Heading>

      <Text 
        mb={6} 
        color="gray.400"
        fontSize={{ base: "sm", md: "md" }}
        zIndex={1}
      >
        Time is Ticking! Don't Waste Another Moment, Elevate Your Skills Now!
      </Text>

      <Button
        bgGradient="linear(to-b, #EBBB54, #B88923)"
        borderRadius="full"
        boxShadow="0px 1px 15px rgba(235, 187, 84, 0.3)"
        px={6}
        py={4}
        zIndex={1}
        _hover={{ opacity: 0.9 }}
      >
       Upgrade Your Plan
      </Button>
    </Box>
  );
}
