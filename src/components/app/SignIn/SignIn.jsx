import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Link,
  VStack,
  HStack,
  Img,
} from "@chakra-ui/react";

export default function SignInPage() {
  return (
    <Flex
      align="center"
      justify="center"
      minH="100vh"
      bg="black"
      px={{ base: 4, sm: 8 }} // Added padding for smaller screens
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        bg="black"
        rounded="lg"
        shadow="lg"
        overflow="hidden"
        maxW="1100px" // Restricts the width on larger screens for better UX
        w="full"
        p={{ base: "20px", sm: "24px" }}
        border={'1px solid rgb(158 158 158 / 20%)'}
        borderRadius={'16px'}
      >
        {/* Left Image Section */}
        <Box display={{ base: "none", md: "block" }} w="50%">
          <Img
            src="/weding.jpg"
            alt="Person working on a laptop"
            objectFit="cover"
            w="full"
            h="full"
            borderRadius={"13px"}
          />
        </Box>

        {/* Right Form Section */}
        <VStack
          spacing={4}
          justify="center"
          p={{ base: 6, md: 8 }}
          w={{ base: "100%", md: "50%" }}
          align="stretch"
        >
          <Heading as="h2" size="lg" color="white" textAlign="center">
            Sign in
          </Heading>
          <Text color="white" mb={6} textAlign="center">
            Access unlimited courses and elevate your skills starting today.
          </Text>

          <form>
            <VStack spacing={4} align="stretch">
              <Box>
                {/* <Text fontSize="sm" color="white" mb={1}>
                  Email
                </Text> */}
                <Box
                  borderRadius={"28px"}
                  py={"10px"}
                  px={"24px"}
                  bg={"rgb(38, 38, 38)"}
                >
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    borderColor="transparent"
                    _hover={{ borderColor: "transparent" }}
                    focusBorderColor="transparent"
                    rounded="lg"
                    bg={"transparent"}
                    color={"white"}
                  />
                </Box>
              </Box>

              <Box
                borderRadius={"28px"}
                py={"10px"}
                px={"24px"}
                bg={"rgb(38, 38, 38)"}
              >
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  borderColor="transparent"
                  _hover={{ borderColor: "transparent" }}
                  focusBorderColor="transparent"
                  rounded="lg"
                  bg={"transparent"}
                  color={"white"}
                />
              </Box>
              <Button
                type="submit"
                bgGradient="linear(to-b, #EBBB54, #B88923)"
                borderRadius="full"
                boxShadow="0px 1px 15px rgba(235, 187, 84, 0.3)"
                px={6}
                py={6}
                zIndex={1}
                _hover={{ opacity: 0.9 }}
              >
                Sign In
              </Button>
            </VStack>
          </form>

          <Link
            href="#"
            color="white"
            fontSize="sm"
            mt={4}
            _hover={{ textDecoration: "underline" }}
            alignSelf="center"
          >
            Forgot Password?
          </Link>

          <HStack align="center" justify="center" my={4}>
            <Text color="white">Or</Text>
          </HStack>

          <Text fontSize="sm" color="white" textAlign="center">
            Don't have an account?{" "}
            <Link
              href="#"
              color="white"
              _hover={{ textDecoration: "underline" }}
            >
              Register
            </Link>
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
