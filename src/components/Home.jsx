import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);
  const [passwordChangeError, setPasswordChangeError] = useState(null);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
      axios.get(`http://localhost:8000/user/${userEmail}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    } else {
      console.error('User email not found in local storage');
    }
  }, []);

  const handlePasswordChange = () => {
    if (userData && userData.email && oldPassword && newPassword === confirmPassword) {
      axios
        .post('http://localhost:8000/user/change-password', {
          email: userData.email,
          oldPassword: oldPassword,
          newPassword: newPassword,
        })
        .then((response) => {
          setPasswordChangeSuccess(true);
          setPasswordChangeError(null);
          setOldPassword("")
          setNewPassword("")
          setConfirmPassword("")
        })
        .catch((error) => {
          setPasswordChangeSuccess(false);
          setPasswordChangeError('Failed to change the password. Please check your old password.');
          console.error('Error changing password:', error);
        });
    } else {
      setPasswordChangeSuccess(false);
      setPasswordChangeError('Invalid input. Please provide valid passwords.');
    }
  };

  return (
    <Box p={4}>
      <Heading size="md">Home</Heading>
      <Center>
        {userData ? (
          <Box>
            <Heading>Email: {userData.email}</Heading>
            <Heading>Name: {userData.username}</Heading>
          </Box>
        ) : (
          <Spinner size="xl" />
        )}
      </Center>
      <form>
        <FormControl isRequired>
          <FormLabel>Old Password</FormLabel>
          <Input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>New Password</FormLabel>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        {passwordChangeError && <Text color="red">{passwordChangeError}</Text>}
        {passwordChangeSuccess && (
          <Text color="green">Password changed successfully!</Text>
        )}
        <Button mt={4} colorScheme="teal" onClick={handlePasswordChange}>
          Change Password
        </Button>
      </form>
    </Box>
  );
};

export default Home;
