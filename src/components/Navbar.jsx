import React from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // Check if a token is present in local storage
  const hasToken = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from local storage when logging out
    localStorage.removeItem('token');
    // You can also perform other logout actions if needed.

    // For example, you can redirect the user to the login page:
    navigate('/login');
  };

  return (
    <Flex align="center" justify="space-between" p={4} bg="teal.500" color="white">
      <Link as={RouterLink} to="/">
        <Heading size="md">Your Logo</Heading>
      </Link>
      <Box>
        {hasToken ? (
          // If a token is present, show the "Logout" button
          <Link onClick={handleLogout} ml={4} mr={4} cursor="pointer">
            Logout
          </Link>
        ) : (
          // If no token is present, show the "Login" and "Register" links
          <>
            <Link as={RouterLink} to="/login" ml={4} mr={4}>
              Login
            </Link>
            <Link as={RouterLink} to="/register" ml={4} mr={4}>
              Register
            </Link>
          </>
        )}
        <Link as={RouterLink} to="/home">
          Home
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
