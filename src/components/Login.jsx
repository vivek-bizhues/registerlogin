import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box p={4}>
      <Heading size="md">Login</Heading>
      <VStack spacing={4} mt={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Login
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;