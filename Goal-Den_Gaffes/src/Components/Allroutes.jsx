import React from 'react'
import { Route, Routes } from "react-router-dom";
// import Grid from './Grid';
import Listings from './Listings';
import App from '../App';
// import CardDetailed from '../CardDetailed';
// import Edit from '../Edit';
import Home from './Home';
import Post from './Post';


export default function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings/>} />
        <Route path="/create" element={<Post/>}/>
        {/* <Route path="/" element={<Grid/>} /> */}
        {/* <Route path="/listings/details/:id" element={<CardDetailed/>} /> */}
        {/* <Route path="/listings/edit/:id" element={<Edit/>} /> */}
    </Routes>
  )
}