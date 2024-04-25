const User = require("../models/User");
const asyncWrapper = require("../middleware/async");
const message = require("../middleware/message");
require("dotenv").config();

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs"); //Used for password encryption

const signup = asyncWrapper(async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  return message(201, "User Registered Successfully", res); //Duplicate username and email are handled by middleware
});
const signin = asyncWrapper(async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return message(
      404,
      `No user found with username :${req.body.username}`,
      res
    );
  }
  let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password",
    });
  }
  //Dont retrun all paramters of user
  const token = jwt.sign({ id: user }, process.env.JWT_SECRET_KEY, {
    algorithm: "HS256",
    allowInsecureKeySizes: true,
    expiresIn: 86400, //In seconds
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
