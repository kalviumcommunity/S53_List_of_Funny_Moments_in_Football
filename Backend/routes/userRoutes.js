const { signup, login } = require("../Controllers/AuthControllers");
const express = require("express");
const User = require("../data/User")

const Authroute = express.Router();

Authroute.post("/signup", signup);
Authroute.post("/login", login);

// Authroute.get("/",async(req,res) => {
//     try {
//         const data = await User.find();
//         res.send(data);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// })

module.exports = {Authroute}