const mongoose = require("mongoose");
const express = require("express");
const Post = require("../data/schema");
const Joi = require("joi");
const router = express.Router();

require("dotenv").config();

// Joi schema for post data validation
const postSchema = Joi.object({
    title: Joi.string().required(),
    video: Joi.string().required(),
    league: Joi.string().allow(''),
    year: Joi.string().allow(''),
    continent: Joi.string().allow(''),
    likes: Joi.string().allow(''),
    comments: Joi.array().items(Joi.string()),
    created_by : Joi.string().required()
});



router.get("/", async (req, res) => {
    try {
        const data = await Post.find();
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const { error } = postSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const postCount = await Post.countDocuments();
        const newPost = new Post({
            postId: postCount + 1, 
            title: req.body.title,
            video: req.body.video,
            year: req.body.year,
            league: req.body.league,
            continent: req.body.continent,
            likes: req.body.likes,
            comments: req.body.comments,
            created_by: req.body.created_by
        });
        await newPost.save();
        res.send("New Post Added!!!");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.put("/:id", async (req, res) => {
    const _id = req.params.id; // Assuming postId is passed as the parameter
    try {
        const { error } = postSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const existingPost = await Post.findOne({ _id: _id });
        
        if (!existingPost) {
            return res.status(404).send("Post not found");
        }

        // Update existing post fields
        Object.assign(existingPost, req.body);

        await existingPost.save();

        res.send("Post updated successfully!");
    } catch (error) {
        res.status(500).send(error.message);
    }
});


router.delete("/", async (req, res) => {
    const deletePostTitle = req.body.title;

    try {
        const result = await Post.deleteOne({ title: deletePostTitle });

        if (result.deletedCount === 0) {
            return res.status(404).send("Post not found");
        } else {
            res.send("Post Deleted!!!");
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = { router };
