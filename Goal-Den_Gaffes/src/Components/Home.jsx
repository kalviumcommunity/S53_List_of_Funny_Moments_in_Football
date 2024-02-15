import React from 'react';
import { InputGroup, InputLeftElement, Input, ChakraProvider } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from '@chakra-ui/react'
import dog from "../Assets/dog.png"
// import React from 'react'
import german from "../Assets/german.png"
import epl from "../Assets/epl.png"
import laliga from "../Assets/SOCIAL LALIGA.png"
import france from "../Assets/uber eats.png"
import serie from "../Assets/serie A.jpg"
import ucl from "../Assets/ucl.jpeg"
import wc from "../Assets/WC.png"
import { Link } from 'react-router-dom';
// import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Home = () => {
  return (
    <div style={{display: "flex",flexDirection: "column"}}>
      <section style={{color: "white",display: "flex",justifyContent: "space-around",marginTop: "10vh",alignItems: "center"}}>
    <h1 style={{fontFamily: "Poppins,sans-serif",fontSize: "70px",paddingRight: "8%"}} className='blowing-text'>REVEL <br /> IN FOOTBALL'S <br />EPIC FAILS</h1>
        <div style={{display: "flex", alignItems: "center",justifyContent: "space-evenly"}}>
        <img src= {dog} alt="" style={{position: "absolute",zIndex: "1"}}/>
      <div className='ellipse' style={{height: "70vh",width: "20vw",backgroundColor: "yellow",borderRadius: "50%", transform: "rotate(-35deg)",boxShadow: "3px 15px 25px 10px black "}}>
      </div>
        </div>
      </section>
      <div style={{display: "flex",flexDirection: "column",justifyContent: "center",margin: "0",padding: "0"}}>
        <h2>Popular Tournaments</h2>
        <ul className='honey'>
            <li className="unit">
                <img src= {epl} alt="" className='pleague'/>
                <div className='unit-title'>Primier League</div>
            </li>
            <li className="unit">
                <img src={german} alt="" className='pleague'/>
                <div className='unit-title'>Bundlesliga</div>
            </li>
            <li className="unit">
                <img src={laliga} alt="" className='pleague' style={{width: "100%"}}/>
                <div className='unit-title'>La Liga</div>
            </li>
            <li className="unit">
                <img src={france} alt="" className='pleague'/>
                <div className='unit-title'>Ligue 1</div>
            </li>
            <li className="unit">
                <img src={serie} alt="" className='pleague'/>
                <div className='unit-title'>Seirie A</div>
            </li>
            <li className="unit">
                <img src={ucl} alt="" className='pleague'/>
                <div className='unit-title'>Champions League</div>
            </li>
            <li className="unit">
                <img src={wc} alt="" className='pleague'/>
                <div className='unit-title'>World Cup</div>
            </li>
        </ul>
        <Link to={"/listings"}>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme='white' variant='solid' style={{marginLeft: "80%",marginTop: "25%",width: "10vw",height: "7vh",fontSize: "30px"}}>
    Explore
  </Button>
        </Link>
    </div>
    </div>
  );
};

export default Home;
