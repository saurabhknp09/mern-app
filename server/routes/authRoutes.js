const express = require("express");
const { register, users, login } = require("../controllers/authController");
const router = express.Router();

//Register new user
router.post("/register", register);
router.get("/users", users);
router.post("/login", login);

module.exports = router;
