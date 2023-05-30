const { Flex, Heading, Box } = require('@chakra-ui/react');

const Home = () => {
  return (
    <Flex justify="center" align="center" bg="gray.100" h="93.9vh">
      <Box textAlign="center" maxW="820px">
        <Heading as="h1">Welcome to our contacts manager service ☎️</Heading>
      </Box>
    </Flex>
  );
};

export default Home;
