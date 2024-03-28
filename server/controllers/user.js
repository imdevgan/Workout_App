const User = require("../models/User");
const asyncWrapper = require("../middleware/async");
require("dotenv").config();

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs"); //Used for password encryption

const signup = asyncWrapper(async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  res.status(201).json({ message: "User Registered Successfully" }); //Duplicate username and email are handled by middleware
});
const signin = asyncWrapper(async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res
      .status(404)
      .json({ message: `No user found with username :${req.body.username}` });
  }
  var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password",
    });
  }
  const token = jwt.sign({ id: user }, process.env.JWT_SECRET_KEY, {
    algorithm: "HS256",
    allowInsecureKeySizes: true,
    expiresIn: 86400,
  });
  res.status(200).send({
    id: user._id,
    username: user.username,
    email: user.email,
    accessToken: token,
  });
});

module.exports = {
  signup,
  signin,
};
