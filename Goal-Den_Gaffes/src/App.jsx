import { useState } from 'react'
import Home from './Components/Home'
import { ChakraProvider, Box, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Grid from './Components/Grid'
import Footer from './Components/Footer'
import React from 'react'
import Card from './Card'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

function App() {
  const [modal, setModal] = useState(false)
  const [explore,setExplore] = useState(false)
  return (
    <ChakraProvider>
      <Box
        as="body"
        h="100%"
        bgGradient="linear(to bottom right, #00bfff, #000d99)"
        style={{ filter: modal ? 'blur(5px)' : 'none', transition: 'filter 0.5s ease-in-out' }}
      >
        <nav style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
          <h3>GOAL-DEN GAFFES</h3>
          <div className='nav2'>
            <Button colorScheme='white' variant='outline' style={{ margin: "0px 30px", width: "6vw" }} onClick={() => setModal(!modal)}>
              About
            </Button>
            <Button colorScheme='white' variant='outline' style={{ margin: "0px 30px", width: "6vw" }}>
              Log In
            </Button>
            <Button colorScheme='white' variant='outline' style={{ margin: "0px 30px" }} onClick={() => {
              setExplore(false)
            }}>
              Home 
            </Button>
          </div>
          <InputGroup style={{ width: "20vw" }}>
            <InputLeftElement pointerEvents='none'>
              <SearchIcon color='white.255' />
            </InputLeftElement>
            <Input variant="flushed" type="text" placeholder='Search' _placeholder={{ opacity: 1, color: 'white' }} />
          </InputGroup>
        </nav>

        <Modal isOpen={modal} onClose={() => setModal(false)} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <h3>Name: GOAL-DEN GAFFES</h3> <br /> 

            <h3>Description:</h3>GOAL-DEN GAFFES is a vibrant online platform dedicated to celebrating the lighter side of football. From hilarious bloopers to heartwarming moments, we curate and share the funniest and most entertaining content from the world of football. <br /> <br />

            <h3>About Section:</h3>
            At GOAL-DEN GAFFES, we believe that football is not just a game—it's a source of joy, laughter, and camaraderie. Our About section is where we invite you to join our community and share your passion for the beautiful game. Whether you're a die-hard fan, a casual observer, or just someone who appreciates a good laugh, you'll find something to love here.
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {explore ? (
  <>
  <Card/>
  </>
) : (
  <>
  <Home />
  <Grid explore = {explore} setExplore={setExplore}/>
  </>
)}

       
        
        {/* <Card/> */}
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App
