import React from 'react'
import { Route, Routes } from "react-router-dom";
// import Grid from './Grid';
import Listings from './Listings';
import App from '../App';
// import CardDetailed from '../CardDetailed
import Update from './Update';
import Home from './Home';
import Post from './Post';
import Login from "./Login"
import Signup from './Signup';

export default function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings/>} />
        <Route path="/create" element={<Post/>}/>
        <Route path="/update" element={<Update/>} />
        <Route path='/login' element={<Login/>} />
        <Route path= "/signup" element={<Signup/>} />
        {/* <Route path="/listings/details/:id" element={<CardDetailed/>} /> */}
        {/* <Route path="/listings/edit/:id" element={<Edit/>} /> */}
    </Routes>
  )
}