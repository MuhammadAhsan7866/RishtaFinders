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
    Select,
  } from "@chakra-ui/react";
  
  export default function Register() {
    return (
      <Flex
        align="center"
        justify="center"
        minH="100vh"
        bg="black"
        px={{ base: 4, sm: 8 }}
        pt={'90px'}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          bg="black"
          rounded="lg"
          shadow="lg"
          overflow="hidden"
          maxW="1100px"
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
                {/* First Name */}
                <Flex gap={'12px'} alignItems={'center'}>
                <Box
                  borderRadius={"28px"}
                  py={"10px"}
                  px={"24px"}
                  bg={"rgb(38, 38, 38)"}
                >
                  <Input
                    type="text"
                    placeholder="First Name"
                    required
                    borderColor="transparent"
                    _hover={{ borderColor: "transparent" }}
                    focusBorderColor="transparent"
                    rounded="lg"
                    bg={"transparent"}
                    color={"white"}
                  />
                </Box>
                   {/* Last Name */}
                   <Box
                  borderRadius={"28px"}
                  py={"10px"}
                  px={"24px"}
                  bg={"rgb(38, 38, 38)"}
                >
                  <Input
                    type="text"
                    placeholder="Last Name"
                    required
                    borderColor="transparent"
                    _hover={{ borderColor: "transparent" }}
                    focusBorderColor="transparent"
                    rounded="lg"
                    bg={"transparent"}
                    color={"white"}
                  />
                </Box>
  
                </Flex>
                <Flex gap={'12px'} alignItems={'center'}>
                     {/* Gender */}
                <Box
                  borderRadius={"28px"}
                  py={"10px"}
                  px={"24px"}
                  bg={"rgb(38, 38, 38)"}
                  w={'100%'}
                >
                  <Select
                    placeholder="Gender"
                    borderColor="transparent"
                    _hover={{ borderColor: "transparent" }}
                    focusBorderColor="transparent"
                    rounded="lg"
                    bg={"transparent"}
                    color={"white"}
                   
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Select>
                </Box>
  
                {/* Date of Birth */}
                <Box
                  borderRadius={"28px"}
                  py={"10px"}
                  px={"24px"}
                  bg={"rgb(38, 38, 38)"}
                  w={'100%'}
                >
                  <Input
                    type="date"
                    placeholder="Date of Birth"
                    required
                    borderColor="transparent"
                    _hover={{ borderColor: "transparent" }}
                    focusBorderColor="transparent"
                    rounded="lg"
                    bg={"transparent"}
                    color={"white"}
                  />
                </Box>
                </Flex>
                <Flex gap={'12px'} alignItems={'center'}>
                    {/* Age */}
                <Box
                  borderRadius={"28px"}
                  py={"10px"}
                  px={"24px"}
                  bg={"rgb(38, 38, 38)"}
                >
                  <Input
                    type="number"
                    placeholder="Age"
                    required
                    borderColor="transparent"
                    _hover={{ borderColor: "transparent" }}
                    focusBorderColor="transparent"
                    rounded="lg"
                    bg={"transparent"}
                    color={"white"}
                  />
                </Box>
  
                {/* Qualification */}
                <Box
                  borderRadius={"28px"}
                  py={"10px"}
                  px={"24px"}
                  bg={"rgb(38, 38, 38)"}
                >
                  <Input
                    type="text"
                    placeholder="Qualification"
                    required
                    borderColor="transparent"
                    _hover={{ borderColor: "transparent" }}
                    focusBorderColor="transparent"
                    rounded="lg"
                    bg={"transparent"}
                    color={"white"}
                  />
                </Box>
  
                </Flex>
                {/* Height */}
                <Box
                  borderRadius={"28px"}
                  py={"10px"}
                  px={"24px"}
                  bg={"rgb(38, 38, 38)"}
                >
                  <Input
                    type="text"
                    placeholder="Height"
                    required
                    borderColor="transparent"
                    _hover={{ borderColor: "transparent" }}
                    focusBorderColor="transparent"
                    rounded="lg"
                    bg={"transparent"}
                    color={"white"}
                  />
                </Box>
  
                {/* Sign In Button */}
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
  