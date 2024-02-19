const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const {router} = require("./routes/routers");
const {Authroute} = require("./routes/userRoutes")

const app = express();
app.use(cors());
app.use(express.json());

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.Mongo_Key);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

connectDatabase();

app.get("/ping", (req, res) => {
  res.send("Hi");
});

app.get("/", (req, res) => {
  res.send("Welcome to Funny moment API");
});

app.use("/auth", Authroute); // Mount authentication routes
app.use("/posts", router); // Mount post routes

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
