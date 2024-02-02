const mongoose = require("mongoose")

const schema = mongoose.Schema

const postSchema = new schema({
    postId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true 
    },
    video : {
        type: String,
        required: true 
    },
    league: String,
    year: String,
    continent: String,
    likes: Number,
    comments: Array,
    time: { type: Date, default: Date.now() }
},{ timestamps: true })

const Post = mongoose.model("Post",postSchema)

module.exports = Post