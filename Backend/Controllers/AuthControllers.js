const bcrypt = require("bcryptjs");
const Joi = require("joi");
const User = require("../data/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const signupSchema = Joi.object({
    fullname: Joi.string().min(3).max(30).required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password'),
}).with('password', 'confirmPassword');

const loginSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().required(),
});

const signup = async (req, res) => {
    try {
        const { error } = signupSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { fullname, username, password } = req.body;

        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            fullname,
            username,
            password: hashedPassword
        });

        // Save the user
        await newUser.save();

        // Sign the token
        const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);

        res.status(201).json({ message: "User created successfully", token });
    } catch (error) {
        console.error("Error in Signup Controller", error);
        res.status(500).json(error);
    }
}

const login = async (req, res) => {
    try {
        const { error } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { username, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Invalid Username or Password" });
        }

        // Compare passwords
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Username or Password" });
        }

        // Sign the token
        const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);

        res.status(200).json({
            username: username,
            accessToken: token
        });
    } catch (error) {
        console.error("Error in Login Controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { signup, login };