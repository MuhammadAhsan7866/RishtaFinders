import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  Tag,
  Container,
} from "@chakra-ui/react";

const plans = [
  {
    name: "Free for Month ",
    price: 0,
    currenyname:'Rs',
    btnname:'Free trail for one month',
    features: [
      { text: "10 Direct Connection", available: true },
      { text: "view Unlimited profile", available: true },
      { text: "Saved Unlimited Profiles", available: true },
      { text: "National & International", available: false },
      { text: "Horoscope Matching ", available: false },
   
    ],
  },
  {
    name: "24-Hour Rishta Rush",
    price: 1000,
    currenyname:'Rs / 24hours',
    btnname:'Upgrade your Plan',
    features: [
      { text: "Unlimited profile views", available: true },
      { text: "Unlimited Direct Connection", available: true },
      { text: "24-hour access", available: true },
      { text: "No restrictions", available: true },
      { text: "Enhanced matching experience", available: true },
      
     
   
    ],
    tag: "BEST VALUE",
  },
  {
    name: "1 Month",
    price: 2250,
    currenyname:'Rs',
    btnname:'Upgrade your Plan',
    features: [
      { text: "50 Direct Connection", available: true },
      { text: "view Unlimited profile", available: true },
      { text: "Saved Unlimited Profiles", available: true },
      { text: "National & International", available: true },
      { text: "Horoscope Matching ", available: true },
    ],
  },
  {
    name: "3 Month",
    price: 5250,
    currenyname:'Rs',
    btnname:'Upgrade your Plan',
    features: [
      { text: "10 Direct Connection", available: true },
      { text: "view Unlimited profile", available: true },
      { text: "Saved Unlimited Profiles", available: true },
      { text: "National & International", available: true },
      { text: "Horoscope Matching ", available: true },
    
    ],
    tag: "PREMIUM",
  },
];

const Pricing = () => {
  return (
    <Box bg="black" color="white" p={8}>
       <Box  maxW={{base:'100%',sm:'100%',md:'100%',xxl:'65%'}} m={'auto'}  mb={'18px'}>
      <Heading textAlign={'center'} color={'white'} fontFamily={'Poppins'} fontSize={'35px'} fontWeight={'400'} lineHeight={'48px'}>
      Rishta Packages &
      <Text as={'span'} ml={'6px'} color={'#D0A03A'}  fontFamily={'Poppins'} fontSize={'38px'} mb={'45px'}>Best Match</Text>
      </Heading>
      
     
      </Box>
      <Text textAlign="center" mb={8}>
      Where love stories unfold, and forever begins.
      </Text>
      <Container p={0} maxW={"1440px"}>
        <Flex justify="center"  gap={4} flexWrap={{base:'wrap',sm:'wrap',md:'wrap',xxl:'nowrap',xxxl:'nowrap'}}>
          {plans.map((plan, index) => (
            <Box
              key={index}
              bg="linear-gradient(180deg, rgb(12, 12, 12) 0%, rgb(12, 12, 12) 100%)"
              backdropFilter="blur(10px)"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="rgba(158, 158, 158, 0.2)"
              borderRadius="16px"
              boxShadow="0px 0.796192px 2.38858px -0.625px rgba(0, 0, 0, 0.05), 0px 2.41451px 7.24352px -1.25px rgba(0, 0, 0, 0.05), 0px 6.38265px 19.148px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)"
              opacity="1"
              p="30px"
              w={{ base: "full", sm: "45%", md: "48%" }}
              position="relative"
              sx={{
                transition: "all 0.3s",
                _hover: {
                  borderColor: "rgba(235, 187, 84, 0.5)",
                  bg: "linear-gradient(180deg, rgb(12, 12, 12) 49.535%, rgba(235, 187, 84, 0.15) 100%)",
                  boxShadow:
                    "0px 0.796192px 2.38858px -0.625px rgba(0, 0, 0, 0.05), 0px 2.41451px 7.24352px -1.25px rgba(0, 0, 0, 0.05), 0px 6.38265px 19.148px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)",
                },
              }}
            >
              <Heading as="h2" fontSize={'25px'} my={3}color={'#D0A03A'} borderBottom={'1px solid #D0A03A'} maxW={'fit-content'} fontFamily={'Poppins'}>
                {plan.name}
              </Heading>
             <Flex color={'#D0A03A'} fontSize={'21px'}>
             <Text  fontWeight="bold" mb={4} fontFamily={'Poppins'}>
                {plan.price}
                <Text as={'span'} fontFamily={'Poppins'}>
                {plan.currenyname}
                </Text>
              </Text>
             </Flex>
             
              {plan.tag && (
                <Tag
                  position="absolute"
                  top={2}
                  right={2}
                  colorScheme="#C1922C"
                  fontSize="xs"
                  fontWeight="bold"
                  bg={"#C1922C"}
                  color={"black"}
                  p={"8px 12px"}
                  borderRadius={"50px"}
                >
                  {plan.tag}
                </Tag>
              )}
              <List spacing={2} mb={'25px'} >
                {plan.features.map((feature, idx) => (
                  <ListItem key={idx} marginBottom={'20px'} >
                    <Text
                      as="span"
                      color={feature.available ? "green.500" : "red.500"}
                      textDecoration={
                        feature.available ? "none" : "line-through"
                      }
                    >
                      {/* {feature.available ? "✔️" : "❌"} */}
                    </Text>{" "}
                    {feature.text}
                  </ListItem>
                ))}
              </List>
              <Button
                colorScheme="#C1922C"
                w="full"
                mb={4}
                bg={"#C1922C"}
                color={"black"}
                p={"8px 24px"}
                borderRadius={"50px"}
              >
               {plan.btnname}
              </Button>
              <Text color="#bfb7b7" textAlign="center" fontSize={"12px"} w={'100%'}>
                Lock-in your price before it goes up
              </Text>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Pricing;
