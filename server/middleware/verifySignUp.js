const User = require("../models/User");
const asyncWrapper = require("./async");

const checkDuplicate = asyncWrapper(async (req, res, next) => {
  //Username
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    res.status(400).send({ message: "Username already exists!" });
    return;
  } else {
  }
  const user1 = await User.findOne({ email: req.body.email });
  if (user1) {
    res.status(400).send({ message: "Email already exists" });
    return;
  }
  next();
});

module.exports = checkDuplicate;
