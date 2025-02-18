const User = require("../models/userModel");

//Register an user
const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        console.log(req.body)
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const user = await User.create({ name, email, password });
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Get all users
const users = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Login
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log(req.body)
        const userExists = await User.findOne({ email, password });
        if (userExists) {
            return res.status(200).json({
                message: "User exists",
                user: {
                    name: userExists.name,
                    email: userExists.email
                }
            });
        } else {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        // res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { register, users, login }