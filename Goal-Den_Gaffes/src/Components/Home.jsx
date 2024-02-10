import React from 'react';
import { InputGroup, InputLeftElement, Input, ChakraProvider } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <nav style={{display:"flex", flexDirection: "row", justifyContent: "space-",width: "100%",alignItems: "center"}}>
        {/* <img src="./src/Assets/logo (2).png" alt=""  style={{width: "5vw"}}/> */}
          <h3>GOAL-DEN GAFFES</h3>
        <div className='nav2'>
        <Button colorScheme='white' variant='outline' style={{margin: "0px 30px",width: "6vw"}}>
           About
        </Button>
        <Button colorScheme='white' variant='outline'  style={{margin: "0px 30px",width: "6vw"}}>
           Log In
        </Button>
        <Button colorScheme='white' variant='outline'  style={{margin: "0px 30px"}}>
           Sign Up
        </Button>
        </div>
        <InputGroup style={{width: "20vw"}}>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='white.255' />
          </InputLeftElement>
          <Input variant = "flushed"type="text" placeholder='Search'  _placeholder={{ opacity: 1, color: 'white' }} />
        </InputGroup>
      </nav>
      <section style={{color: "white",display: "flex",justifyContent: "space-around",marginTop: "10vh",alignItems: "center"}}>
    <h1 style={{fontFamily: "Poppins,sans-serif",fontSize: "70px",paddingRight: "10%"}}>REVEL <br /> IN FOOTBALL'S <br />EPIC FAILS</h1>
        <div style={{display: "flex", alignItems: "center",justifyContent: "space-evenly"}}>
        <img src="../src/Assets/dog.png" alt="" style={{position: "absolute",zIndex: "1"}}/>
      <div className='ellipse' style={{height: "70vh",width: "20vw",backgroundColor: "yellow",borderRadius: "50%", transform: "rotate(-35deg)",boxShadow: "3px 15px 25px 10px black "}}>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
