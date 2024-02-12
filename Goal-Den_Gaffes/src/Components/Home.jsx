import React from 'react';
import { InputGroup, InputLeftElement, Input, ChakraProvider } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from '@chakra-ui/react'
import dog from "../Assets/dog.png"

const Home = () => {
  return (
    <div>
      <section style={{color: "white",display: "flex",justifyContent: "space-around",marginTop: "10vh",alignItems: "center"}}>
    <h1 style={{fontFamily: "Poppins,sans-serif",fontSize: "70px",paddingRight: "8%"}} className='blowing-text'>REVEL <br /> IN FOOTBALL'S <br />EPIC FAILS</h1>
        <div style={{display: "flex", alignItems: "center",justifyContent: "space-evenly"}}>
        <img src= {dog} alt="" style={{position: "absolute",zIndex: "1"}}/>
      <div className='ellipse' style={{height: "70vh",width: "20vw",backgroundColor: "yellow",borderRadius: "50%", transform: "rotate(-35deg)",boxShadow: "3px 15px 25px 10px black "}}>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
