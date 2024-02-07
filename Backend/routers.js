const mongoose = require("mongoose")
const express = require("express")
const Post  = require("./data/schema")
const app = express()
require("dotenv").config()

app.use(express.json())

async function connect(){
    await mongoose.connect(process.env.Mongo_Key)
}

connect()
.then(() => {
    console.log("Connected to Database!!!")
}).catch((err) => {
    console.log("Error Connecting to Database!!!")
})

app.get("/", async (req,res) => {
    await Post.find().then((data) => {
        returnData = data
        res.send(data)
    })
})

app.post("/", async (req,res) => {
    const newdata = new Post(req.body)
    await newdata.save().then((result) => {
        res.send("New Post Added!!!")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

app.put("/:postId", async (req,res)=> {
    try{
        let {postId} = req.params
        let newData = req.body

        let result  = await Post.findOneAndUpdate({postId: postId}, newData)
        
        if (result === null || result === undefined){
            res.status(404).send(err)
        }
        else{
            res.send("Updated!!!")
        }
    }catch(err){
        res.status(500).send("Error!!!: ",err.message)
    }
})

app.delete("/", async (req,res) => {
    let deletePost = req.body.title

    try{
        let result = await Post.deleteOne({title: deletePost})

        if(result.deletedCount == 0){
            res.status(404).send("Post not found!!!!")
        }
        else{
            res.send("Post Deleted!!!")
        }
    }catch(err){
        res.status(500).send("Error Deleting Post",err.message)
    }


})

app.listen(3002,() => {
    console.log("App listening on port 3002")
})