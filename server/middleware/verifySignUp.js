const User = require("../models/User");
const asyncWrapper = require("./async");

const checkDuplicate = asyncWrapper(async (req, res, next) => {
  //Username
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    return res.status(400).json({ message: "Username already exists!" });
  } else {
  }
  const user1 = await User.findOne({ email: req.body.email });
  if (user1) {
    return res.status(400).json({ message: "Email already exists" });
  }
  next();
});

module.exports = checkDuplicate;
