import React from 'react'
const Grid = () => {
  return (
    <div>
        <h2>Popular Tournaments</h2>
        <ul className='honey'>
            <li className="unit">
                <img src="../src/Assets/epl.png" alt="" className='pleague'/>
                <div className='unit-title'>Primier League</div>
            </li>
            <li className="unit">
                <img src="../src/Assets/german.png" alt="" className='pleague'/>
                <div className='unit-title'>Bundlesliga</div>
            </li>
            <li className="unit">
                <img src="../src/Assets/SOCIAL LALIGA.png" alt="" className='pleague' style={{width: "100%"}}/>
                <div className='unit-title'>La Liga</div>
            </li>
            <li className="unit">
                <img src="../src/Assets/uber eats.png" alt="" className='pleague'/>
                <div className='unit-title'>Ligue 1</div>
            </li>
            <li className="unit">
                <img src="../src/Assets/serie A.jpg" alt="" className='pleague'/>
                <div className='unit-title'>Seirie A</div>
            </li>
            <li className="unit">
                <img src="../src/Assets/ucl.jpeg" alt="" className='pleague'/>
                <div className='unit-title'>Champions League</div>
            </li>
            <li className="unit">
                <img src="../src/Assets/WC.png" alt="" className='pleague'/>
                <div className='unit-title'>World Cup</div>
            </li>
        </ul>
    </div>
  )
}

export default Grid