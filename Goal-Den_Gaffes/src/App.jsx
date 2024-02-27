import React from 'react';
import Footer from './Components/Footer';
import Allroutes from './Components/Allroutes';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Box
        as="body"
        h="100%"
        bgGradient="linear(to bottom right, #00bfff, #000d99)"
        display="flex"
        flexDirection="column"
      >
        <Navbar />
        <Allroutes />
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Box>
    </ChakraProvider>
  );
}

export default App;
