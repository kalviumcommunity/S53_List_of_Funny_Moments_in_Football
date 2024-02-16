const mongoose = require("mongoose")
const express = require("express")
const Post  = require("./data/schema")
const router = express.Router()
require("dotenv").config()



router.get("/", async (req,res) => {
    await Post.find().then((data) => {
        returnData = data
        res.send(data)
    })
})

router.post("/", async (req, res) => {
    try {
        const postCount = await Post.countDocuments();
        const newPost = new Post({
            postId: postCount + 1, 
            title: req.body.title,
            video: req.body.video,
            year: req.body.year,
            league: req.body.league,
        });
        await newPost.save();
        res.send("New Post Added!!!");
    } catch (err) {
        res.status(500).send(err);
    }
})

router.put("/", async (req, res) => {
    const titleToUpdate = req.body.title;
    try {
        const existingPost = await Post.findOne({ title: titleToUpdate });
        if (!existingPost) {
            return res.status(404).send("Post not found");
        }

        
        existingPost.title = req.body.title;
        existingPost.video = req.body.video;
        existingPost.year = req.body.year;
        existingPost.league = req.body.league;
        existingPost.continent = req.body.continent;
        existingPost.likes = req.body.likes;
        existingPost.comments = req.body.comments;

        await existingPost.save();

        res.send("Post updated successfully!");
    } catch (err) {
        res.status(500).send(err);
    }
});


router.delete("/", async (req,res) => {
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

module.exports= {
    router
}