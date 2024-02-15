const express = require("express");
// const { MongoClient } = require("mongodb");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json())
const { router } = require("./routers");
const mongoose = require("mongoose");
require("dotenv").config();

// let db; // declare a variable to hold the database connection

// mongoUrl = "mongodb+srv://Sharugeshwaran:GdkXj8a2gNN4ne93@cluster0.hdsmqjq.mongodb.net/"
async function connectDatabase() {
  await mongoose.connect(process.env.Mongo_Key).then(res=>{
    console.log("database connected")
  })
}

connectDatabase()

app.get("/ping", (req, res) => {
  res.send("Hi");
});

app.get("/", (req, res) => {
  res.send("Welcome to Funny moment API");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.use("/posts", router);

app.listen(3002, () => {
  console.log("Running on port 3002");
});
