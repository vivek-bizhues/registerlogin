import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for registration.
      const response = await axios.post(`http://localhost:8000/user/register`, formData);

      // Handle the API response here, e.g., show a success message.
      console.log('Registration successful:', response.data);

      // Clear the form after a successful submission.
      setFormData({
        username: '',
        email: '',
        password: '',
      });
      navigate('/login');
    } catch (error) {
      // Handle errors, e.g., display an error message to the user.
      console.error('Registration failed:', error);
    }
  };

  return (
    <Box p={4}>
      <Heading size="md">Register</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} mt={4}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Your Name"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>
          <Button colorScheme="teal" type="submit">
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Register;
