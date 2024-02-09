import { useState } from 'react'
import Home from './Components/Home'
import { ChakraProvider,Box } from '@chakra-ui/react'
import Grid from './Components/Grid'
import Footer from './Components/Footer'

function App() {


  return (
    <>
    <ChakraProvider>
       <Box
        as="body"
        h="100%" 
        bgGradient="linear(to bottom right,  #00bfff,#000d99)" 
      >
        <Home/>
        <Grid/>
        <Footer/>

      </Box>
      </ChakraProvider>
        </>
  )
}

export default App
