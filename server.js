const express = require("express")

const app = express()

app.get("/ping",(req,res) => {
    res.send("Hi")
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(3000,() => {
    console.log("Running App on port 3000")
})

