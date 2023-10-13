import React from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
    align="center"
    justify="space-between"
    p={4}
    bg="teal.500"
    color="white"
  >
    <Link as={RouterLink} to="/">
      <Heading size="md">Your Logo</Heading>
    </Link>
    <Box>
      <Link as={RouterLink} to="/login" ml={4} mr={4}>
        Login
      </Link>
      <Link as={RouterLink} to="/register" ml={4} mr={4}>
        Register
      </Link>
      <Link as={RouterLink} to="/home">
        Home
      </Link>
    </Box>
  </Flex>
  );
}

export default Navbar;