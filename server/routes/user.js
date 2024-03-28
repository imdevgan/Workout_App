const checkDuplicate = require("../middleware/verifySignUp");
const express = require("express");
const user = express.Router();

const { signup, signin } = require("../controllers/user");

user.route("/signup").post(checkDuplicate, signup);
user.route("/signin").post(signin);

module.exports = user;
