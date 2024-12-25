// components/Navbar.js
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="#121128" p={4} color="#e5e7eb" boxShadow="sm">
      <Flex justify="space-between" align="center">
        <Text fontSize="lg" fontWeight="bold">
          Dashboard
        </Text>
        <Avatar size="sm" />
      </Flex>
    </Box>
  );
}
