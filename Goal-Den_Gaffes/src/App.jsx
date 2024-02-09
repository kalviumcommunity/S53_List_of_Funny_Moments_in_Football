import { useState } from 'react'
import Home from './Components/Home'
import { ChakraProvider,Box } from '@chakra-ui/react'
import Grid from './Components/Grid'
function App() {


  return (
    <>
    <ChakraProvider>
       <Box
        as="body"
        h="250vh" 
        bgGradient="linear(to bottom right,  #00bfff,#000d99)" 
      >
        <Home/>
        <Grid/>
      </Box>
      </ChakraProvider>
        </>
  )
}

export default App
