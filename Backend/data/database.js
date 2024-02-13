const Post = require("../data/schema.js")
require("dotenv").config()

const post1 = new Post({
    postId: 1,
    title: "Zlatan Ibrahimovic Bicycle Kick Fail",
    video: "https://youtu.be/dH_8viSOIJI?feature=shared",
    year: "November 2013",
    league: "Champions league",
    continent: "Europe",
    likes: "1000",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
})

const post2 = new Post({
    postId: 2,
    title: "Phil Jones Facial Expressions",
    video: "https://youtu.be/P5i__Or3x8k?feature=shared",
    year: " Throughout his career",
    league: "Premier League",
    continent: "Europe",
    likes: "3000",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
})

const post3 = new Post({
    postId: 3,
    title: "Pele vs Goalkeepers",
    video: "https://youtu.be/9MtMBcZmzPs?feature=shared",
    year: "Throughout his career",
    league: " Brasileirão Série B,",
    continent: "South America",
    likes: "1002",
    comments: [
        { user: "La_Pulga", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
})

const post4 = new Post({
    postId: 4,
    title: "Ronaldinho's Funny Red Card",
    video: "https://youtu.be/EE19ldiDzk0?feature=shared",
    year: "2010",
    league: "Friendly",
    continent: "Europe",
    likes: "200",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Lion", comment: "👌🤣" },
      ],
})

const post5 = new Post({
    postId: 5,
    title: "Hemel Hempstead goalkeeper sarcastically dives after long-range strike",
    video: "https://youtu.be/G3hNhK79Hbc?feature=shared",
    year: "Jan 2020",
    league: "National League South",
    continent: "Europe",
    likes: "100",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Ney_Love", comment: "👌🤣" },
      ],
})

const post6 = new Post({
    postId: 6,
    title: "Peter Crouch's Robot Dance",
    video: "https://youtu.be/96eSrFlUVh0?feature=shared",
    year: "2006",
    league: "Premier League",
    continent: "Europe",
    likes: "6000",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
})

const post7 = new Post({
    postId: 7,
    title: "Mario Balotelli 'Why Always Me?' T-Shirt",
    video: "https://youtu.be/xbs9NfOjwJA?feature=shared",
    year: "October 2011",
    league: "Premier League",
    continent: "Europe",
    likes: "200",
    comments: [
        { user: "Leo_love", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
})

const post8 = new Post({
    postId: 8,
    title: "John Terry's Slip",
    video: "https://youtu.be/HSnZz0kBnqs?feature=shared",
    year: "May 2008",
    league: "Champions league",
    continent: "Europe",
    likes: "2000",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
})

const post9 = new Post({
    postId: 9,
    title: "Cristiano Ronaldo in Disguise",
    video: "https://youtu.be/8H_DSErYUZk?feature=shared",
    year: "Aug 2015",
    league: "-",
    continent: "Europe",
    likes: "7000",
    comments: [
        { user: "RealBaller", comment: "❤️❤️" },
        { user: "Goatnaldo", comment: "👌❤️" },
      ],
})

const post10 = new Post({
    postId: 10,
    title: "Gary Lineker's Underpants Promise",
    video: "https://youtu.be/jvWNghDy4Jo?feature=shared",
    year: "May 2016",
    league: "",
    continent: "Europe",
    likes: "500",
    comments: [
        { user: "RealBaller", comment: "😂🤣" },
        { user: "Goatnaldo", comment: "👌🤣" },
      ],
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
  .catch(err => console.error('Error adding post:', err));