import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';

const theme = extendTheme({});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
       <Navbar />
       <AppRoutes />
    </ChakraProvider>
  );
}

export default App;