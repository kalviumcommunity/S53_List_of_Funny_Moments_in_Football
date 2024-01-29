const express = require("express")

const app = express()

app.get("/ping",(req,res) => {
    res.send("Hi This is Waran")
})

app.listen(3000,() => {
    console.log("Running App on port 3000")
})

