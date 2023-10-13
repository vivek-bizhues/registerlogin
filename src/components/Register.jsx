import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';

const Register = () => {
  return (
    <Box p={4}>
      <Heading size="md">Register</Heading>
      <VStack spacing={4} mt={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your Name" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Register
        </Button>
      </VStack>
    </Box>
  );
}

export default Register;
