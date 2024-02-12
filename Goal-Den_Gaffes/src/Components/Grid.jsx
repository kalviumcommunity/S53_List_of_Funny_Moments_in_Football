import React from 'react'
import german from "../Assets/german.png"
import epl from "../Assets/epl.png"
import laliga from "../Assets/SOCIAL LALIGA.png"
import france from "../Assets/uber eats.png"
import serie from "../Assets/serie A.jpg"
import ucl from "../Assets/ucl.jpeg"
import wc from "../Assets/WC.png"
const Grid = () => {
  return (
    <div>
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
    </div>
  )
}

export default Grid