// components/Dashboard.js
import { Box, Grid, GridItem, Text, Flex, CircularProgress } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Welcome Back, Jhon Anderson!
      </Text>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {/* Top Stats */}
        <GridItem colSpan={[4, 2, 1]} bg="#0f1535" p={4} borderRadius="lg" boxShadow="sm">
          <Text fontSize="lg">Today's Sales</Text>
          <Text fontSize="2xl">$65.4K</Text>
        </GridItem>

        {/* Example Progress */}
        <GridItem colSpan={[4, 2, 1]} bg="#0f1535" p={4} borderRadius="lg" boxShadow="sm">
          <Text fontSize="lg">Total Views</Text>
          <CircularProgress value={68} color="teal.400" size="50px" />
        </GridItem>
      </Grid>

      {/* Additional Sections */}
      <Flex mt={6}>
        <Box flex="1" bg="#0f1535" p={4} borderRadius="lg" mr={4} boxShadow="sm">
          <Text>Monthly Revenue</Text>
        </Box>

        <Box flex="1" bg="#0f1535" p={4} borderRadius="lg" boxShadow="sm">
          <Text>Device Type</Text>
        </Box>
      </Flex>
    </Box>
  );
}
