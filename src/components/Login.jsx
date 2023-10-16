import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await axios.post(`http://localhost:8000/user/login`, formData);

      console.log('Login response:', response.data);

      // Assuming your API returns a token as response.data.token, you can store it in local storage.
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userEmail', formData.email);
        // You can also store other user-related information if needed.
        // localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      navigate('/home')

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleForgotPasswordClick = () => {
    // You can navigate to a "Forgot Password" page or show a modal for password recovery options.
    // Replace '/forgot-password' with the appropriate route for your app.
    navigate('/forgot-password');
  };
  return (
    <Box p={4}>
      <Heading size="md">Login</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} mt={4}>
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
            Login
          </Button>
          <Button variant="link" onClick={handleForgotPasswordClick}>
          Forgot Password
        </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
