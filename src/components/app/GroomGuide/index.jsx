import { Box, Heading, Text } from "@chakra-ui/react";

const safetyPoints = [
  {
    title: "Islamic Beliefs: ",
    text: `Islamic teachings emphasize the sanctity of marriage. The Groom Guide we provide is rooted in Islamic values drawn from the Quran and Hadith. It emphasizes the importance of faith, respect, and understanding in a relationship.
`,
  },
  {
    title: "Financial Wellness: ",
    text: `Financial stability is crucial in marriage. Open communication about finances, including earnings, expenses, savings, and future plans, is vital. Understanding each other's financial status lays a strong foundation for a secure and prosperous future together.
`,
  },
  {
    title: "Good Character (Akhlaq): ",
    text: `Good character, or akhlaq, is a cornerstone of any successful relationship. Honesty, kindness, patience, and integrity are highly valued in Islam. Our Groom Guide highlights the significance of ethical behavior, respect, and building a loving and respectful partnership.
`,
  },
  {
    title: "How We Support You: :",
    text: `At Rishta Finder, we are dedicated to helping you find a partner who shares your Islamic beliefs, financial goals, and ethical principles. Our platform is designed to facilitate connections based on shared values and mutual understanding.
`,
  },
  {
    title: "Join Rishta Finder: ",
    text: `Embark on your journey towards a fulfilling and blessed marriage that reflects Islamic teachings, promotes financial security, and upholds ethical values. Let us assist you in finding a partner who resonates with your faith and values.
`,
  },
  {
    text: `Embrace Love the Islamic Way: With Rishta Finder, explore the beauty of Islamic matrimony where faith, finances, and ethics converge to create a strong foundation for a lasting and harmonious relationship filled with love, respect, and spiritual unity.`,
  },
];

export default function GroomGuide() {
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
          Groom Guide
        </Heading>
        <Text mb={4} fontFamily="Poppins">
          Islamic Beliefs, Financial Wellness, and Good Character
        </Text>
        <Text mb={4} fontFamily="Poppins">
          Islamic Beliefs, Financial Wellness, and Good Character Welcome to
          Rishta Finder, where we emphasize a Groom Guide that aligns with
          Islamic principles, financial stability, and ethical values. For those
          seeking a life partner within the Islamic faith, it's essential to
          consider these key aspects.
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
