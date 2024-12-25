// components/Sidebar.js
import { Box, Flex, IconButton, VStack, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box
      as="nav"
      w={isOpen ? "250px" : "80px"}
      bg="linear-gradient(90deg, rgb(15, 21, 53), rgb(24, 31, 74));"
      color="#e5e7eb"
      minH="100vh"
      p={3}
      transition="width 0.3s ease"
    >
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="lg" fontWeight="bold" display={isOpen ? "block" : "none"}>
          Maxton
        </Text>
        <IconButton
          aria-label="Toggle Sidebar"
          icon={<FiMenu />}
          onClick={() => setIsOpen(!isOpen)}
          bg="transparent"
          color="white"
          fontSize="20px"
          _hover={{ bg: "gray.700" }}
        />
      </Flex>

      <VStack spacing={4} align="flex-start">
        <Flex align="center">
          <AiOutlineDashboard />
          <Text ml={3} display={isOpen ? "block" : "none"}>
            Dashboard
          </Text>
        </Flex>
        {/* Add More Sidebar Items */}
      </VStack>
    </Box>
  );
}
