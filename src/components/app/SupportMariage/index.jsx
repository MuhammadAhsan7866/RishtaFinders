import { Box, Heading, Text } from "@chakra-ui/react";

const safetyPoints = [
  {
    title: "Secure Platform:",
    text: `Our platform is equipped with state-of-the-art security features to 
    safeguard your personal information and ensure that your interactions 
    remain private and protected.`,
  },
  {
    title: "Verification Process:",
    text: `To maintain the authenticity of profiles and enhance trust among our 
    users, we have a robust verification process in place. This helps in 
    minimizing the presence of fake accounts and ensures that you are 
    connecting with genuine individuals.`,
  },
  {
    title: "Privacy Controls:",
    text: `We provide you with comprehensive privacy controls that allow you to 
    choose who can view your profile, contact you, and access your personal 
    information. Your privacy is paramount, and we give you the tools to manage 
    it effectively.`,
  },
  {
    title: "Dedicated Support:",
    text: `Our team of dedicated support staff is available to address any concerns 
    or issues you may encounter while using our platform. If you have any 
    questions or require assistance, we are here to help you every step of the way.`,
  },
  {
    title: "Community Guidelines:",
    text: `We have established clear community guidelines to foster a respectful 
    and inclusive environment for all users. Any behavior that violates these 
    guidelines is promptly addressed to maintain a positive and safe atmosphere 
    for everyone.`,
  },
  {
    title: "Continuous Monitoring:",
    text: `We continuously monitor the platform for any suspicious activities or 
    inappropriate behavior. By keeping a watchful eye on user interactions, 
    we ensure that Rishta Finder remains a secure space for building connections.`,
  },
];

export default function SafetyAndSecurity() {
  return (
    <Box>
      <Box
        maxW="1070px"
        mx="auto"
        pt="150px"
        pb="100px"
        px="20px"
        bg="black"
        color="white"
        rounded="lg"
        shadow="lg"
      >
        <Heading as="h2" size="lg" mb={4} fontFamily="Poppins">
          Safety and Security
        </Heading>
        <Text mb={4} fontFamily="Poppins">
          At Rishta Finder, your safety and security are our top priorities. We
          understand the importance of creating a trusted and secure environment
          for individuals seeking meaningful relationships. That's why we have
          implemented stringent measures to ensure that your experience on our
          platform is safe, confidential, and free from any potential risks.
        </Text>
        {safetyPoints.map(({ title, text }, index) => (
          <Box key={index} mt={6}>
            <Heading
              as="h3"
              size="md"
              mb={2}
              fontFamily="Poppins"
              color="#D1A23B"
            >
              {title}
            </Heading>
            <Text mb={4} fontFamily="Poppins">
              {text}
            </Text>
          </Box>
        ))}
        <Text fontFamily="Poppins">
          With Rishta Finder, you can explore the world of matchmaking with
          confidence, knowing that your safety and security are paramount. Join
          us today and embark on your journey towards finding love in a
          protected and trustworthy environment.
        </Text>
      </Box>
      <Box
        pos="absolute"
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
