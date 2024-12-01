import { Box, Heading, Text } from "@chakra-ui/react";

const content = [
  {
    title: "Islamic Values:",
    text: `In Islam, marriage is sacred. It's important to follow Islamic teachings 
    from the Quran and Hadith. A Bride Guide based on Islamic values helps in building 
    a relationship grounded in faith and respect.`,
  },
  {
    title: "Financial Well-being:",
    text: `Being financially stable is important in marriage. It's good to talk openly 
    about money matters like income, expenses, savings, and future plans. Knowing each 
    other's financial status helps in planning for a shared future.`,
  },
  {
    title: "Good Ethics (Akhlaq):",
    text: `Good ethics, or akhlaq, are vital in any relationship. Being honest, kind, 
    patient, and having integrity are valued in Islam. A Bride Guide that focuses on good 
    ethics emphasizes the importance of respect, kindness, and building a strong and 
    loving relationship.`,
  },
  {
    title: "How We Can Help:",
    text: `At Rishta Finder, we are here to guide you in finding a partner who shares your 
    Islamic beliefs, financial goals, and ethical values. We aim to help you connect with 
    someone who understands and respects what's important to you.`,
  },
  {
    title: "Join Rishta Finder:",
    text: `Start your journey towards a loving and blessed marriage that follows Islamic 
    teachings, values financial responsibility, and upholds good ethics. Let us assist 
    you in finding a partner who shares your faith and values.`,
  },
  {
    title: "Discover Love the Islamic Way:",
    text: `With Rishta Finder, explore the beauty of Islamic marriage where faith, 
    finances, and ethics come together to create a strong foundation for a lasting and 
    harmonious relationship filled with love and respect.`,
  },
];

export default function Bride() {
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
          Bride Guide
        </Heading>
        <Text mb={4} fontFamily="Poppins">
          Islamic Values, Financial Well-being, and Good Ethics
        </Text>
        <Text mb={4} fontFamily="Poppins">
          At Rishta Finder, we believe in a Bride Guide that reflects Islamic
          values, financial stability, and good ethics. It's important for those
          looking for a partner within the Islamic faith to consider these aspects.
        </Text>
        {content.map(({ title, text }, index) => (
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
