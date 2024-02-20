import React, { useState } from 'react';
import { ChakraProvider, Box, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import plus from "./Assets/plus-removebg-preview.png";
import Footer from './Components/Footer';
import Allroutes from './Components/Allroutes';
import { ToastContainer, toast } from 'react-toastify';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import Cookies from 'js-cookie';

function App() {
  const [modal, setModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Function to handle sign out
  const handleSignOut = () => {
    // Remove the 'username' cookie
    Cookies.remove('User');
    Cookies.remove("JWT-token")
    console.log("clicked")
    toast.success('Logged Out Successfully!!!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
    // You can also add any other sign out logic here
  };

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

            <Link to="/">
              <Button colorScheme='white' variant='outline' style={{ margin: "0px 30px",width: "6vw" }}>Home</Button>
            </Link>
            <Link to="/create">
              <Button colorScheme='white' variant='outline' style={{ margin: "0px 30px", fontSize: "30px",width: "6vw" }}>
                <img src={plus} alt="" style={{ width: "1vw" }} />
              </Button>
            </Link>
          </div>
          <InputGroup style={{ width: "20vw" }}>
            <InputLeftElement pointerEvents='none'>
              <SearchIcon color='white.255' />
            </InputLeftElement>
            <Input variant="flushed" type="text" placeholder='Search' _placeholder={{ opacity: 1, color: 'white' }} />
          </InputGroup>

          {/* User Menu */}
          <div className="relative ml-3">
            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://filestore.community.support.microsoft.com/api/images/0ce956b2-9787-4756-a580-299568810730?upload=true" alt="" />
            </button>

            {/* Dropdown Menu */}
            {showMenu && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                <Link to="/signup">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Sign Up</a>
                </Link>
                <Link to="/login">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Log In</a>
                </Link>
                <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1" onClick={handleSignOut}>Sign Out</p>
              </div>
            )}
          </div>
        </nav>

        {/* Modal */}
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h3>Name: GOAL-DEN GAFFES</h3>
              <br />
              <h3>Description:</h3>
              GOAL-DEN GAFFES is a vibrant online platform dedicated to celebrating the lighter side of football. From hilarious bloopers to heartwarming moments, we curate and share the funniest and most entertaining content from the world of football.
              <br /><br />
              <h3>About Section:</h3>
              At GOAL-DEN GAFFES, we believe that football is not just a game—it's a source of joy, laughter, and camaraderie. Our About section is where we invite you to join our community and share your passion for the beautiful game. Whether you're a die-hard fan, a casual observer, or just someone who appreciates a good laugh, you'll find something to love here.
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Renders the Allroutes component */}
        <Allroutes />

        {/* Renders the Footer component */}
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
