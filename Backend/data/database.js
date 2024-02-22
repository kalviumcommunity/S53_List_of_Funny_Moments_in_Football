const Post = require("../data/schema.js")
require("dotenv").config()

const post1 = new Post({
    postId: 1,
    title: "Zlatan Ibrahimovic Bicycle Kick Fail",
    video: "https://i.imgur.com/YgHdbV4.mp4",
    year: "November 2013",
    league: "Champions league",
    continent: "Europe",
    likes: "1000",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
    created_by: "Developer"
})

const post2 = new Post({
    postId: 2,
    title: "Phil Jones Facial Expressions",
    video: "https://i.imgur.com/iprbNX3.mp4",
    year: " Throughout his career",
    league: "Premier League",
    continent: "Europe",
    likes: "3000",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
      created_by: "Developer"
})

const post3 = new Post({
    postId: 3,
    title: "Pele vs Goalkeepers",
    video: "https://i.imgur.com/wm9hoTr.mp4",
    year: "Throughout his career",
    league: " Brasileirão Série B",
    continent: "South America",
    likes: "1002",
    comments: [
        { user: "La_Pulga", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
      created_by: "Developer"
})

const post4 = new Post({
    postId: 4,
    title: "Ronaldinho's Funny Red Card",
    video: "https://i.imgur.com/6UDs0Ux.mp4",
    year: "2010",
    league: "Friendly",
    continent: "Europe",
    likes: "200",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Lion", comment: "👌🤣" },
      ],
      created_by: "Developer"
})

const post5 = new Post({
    postId: 5,
    title: "Hemel Hempstead goalkeeper sarcastically dives after long-range strike",
    video: "https://i.imgur.com/mtMSa7k.mp4",
    year: "Jan 2020",
    league: "National League South",
    continent: "Europe",
    likes: "100",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Ney_Love", comment: "👌🤣" },
      ],
      created_by: "Developer"
})

const post6 = new Post({
    postId: 6,
    title: "Peter Crouch's Robot Dance",
    video: "https://i.imgur.com/u2pGgaS.mp4",
    year: "2006",
    league: "Premier League",
    continent: "Europe",
    likes: "6000",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
      created_by: "Developer"
})

const post7 = new Post({
    postId: 7,
    title: "Mario Balotelli 'Why Always Me?' T-Shirt",
    video: "https://i.imgur.com/lxMxfgp.mp4",
    year: "October 2011",
    league: "Premier League",
    continent: "Europe",
    likes: "200",
    comments: [
        { user: "Leo_love", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
      created_by: "Developer"
})

const post8 = new Post({
    postId: 8,
    title: "John Terry's Slip",
    video: "https://i.imgur.com/amAF7Y3.mp4",
    year: "May 2008",
    league: "Champions league",
    continent: "Europe",
    likes: "2000",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
      created_by: "Developer"
})

const post9 = new Post({
    postId: 9,
    title: "Thiago kicking Erling Haaland's balls",
    video: "https://i.imgur.com/jbFgnJI.mp4",
    year: "Oct 2022",
    league: "Primier League",
    continent: "Europe",
    likes: "7000",
    comments: [
        { user: "RealBaller", comment: "❤️❤️" },
        { user: "Goatnaldo", comment: "👌❤️" },
      ],
      created_by: "Developer"
})

const post10 = new Post({
    postId: 10,
    title: "Gary Lineker's Underpants Promise",
    video: "https://i.imgur.com/xjsFkHu.mp4",
    year: "May 2016",
    league: "",
    continent: "Europe",
    likes: "500",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
      created_by: "Developer"
})


const mongoose = require("mongoose")
// Connect to your local MongoDB instance
mongoose.connect(process.env.Mongo_Key, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to local MongoDB'))
  .catch(err => console.error('Error connecting to local MongoDB:', err));

const postData = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10];

Post.insertMany(postData)
  .then(() => console.log('Post added successfully!'))
  .catch(err => console.error('Error adding post:', err))