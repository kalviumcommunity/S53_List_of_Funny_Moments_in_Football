import React from 'react'
import german from "../Assets/german.png"
import epl from "../Assets/epl.png"
import laliga from "../Assets/SOCIAL LALIGA.png"
import france from "../Assets/uber eats.png"
import serie from "../Assets/serie A.jpg"
import ucl from "../Assets/ucl.jpeg"
import wc from "../Assets/WC.png"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
const Grid = ({explore,setExplore}) => {
  return (
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
        <Button rightIcon={<ArrowForwardIcon />} colorScheme='white' variant='solid' style={{alignSelf: "flex-end",marginRight: "10%",marginTop: "20%",width: "10vw",height: "7vh",fontSize: "30px"}} onClick={() => {
            setExplore(!explore)
        }}>
    Explore
  </Button>
    </div>
  )
}

export default Grid