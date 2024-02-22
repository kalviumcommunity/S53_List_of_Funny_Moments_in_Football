const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    postId: {
        type: Number
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
    time: { type: Date, default: Date.now() },
    created_by : {
        type : String,
        required : true
    }
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
