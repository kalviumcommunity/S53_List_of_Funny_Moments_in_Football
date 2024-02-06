    const express = require("express");
    // const { MongoClient } = require("mongodb");
    const mongoose = require("mongoose")
    require("dotenv").config()

    // let db; // declare a variable to hold the database connection

    // mongoUrl = "mongodb+srv://Sharugeshwaran:GdkXj8a2gNN4ne93@cluster0.hdsmqjq.mongodb.net/"
    let a;
    async function connectDatabase(){
        await mongoose.connect(process.env.Mongo_Key)
    }

    const app = express();

    app.get("/ping", (req, res) => {
        res.send("Hi");
    });

    app.get("/", (req, res) => {
        connectDatabase()
        .then(() => {
            console.log('Connected to Database!!!')})
            res.status(200).send("Connected to Database!!!")
        .catch(err => {
            console.error('Error connecting to Database',err)});;
        res.end()
    });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send("Something went wrong!");
    });

    app.listen(3002,() => {
        console.log("Running on port 3002")
    })

