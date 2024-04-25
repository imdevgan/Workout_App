const User = require("../models/User");
const asyncWrapper = require("./async");
const message = require("./message");

const checkDuplicate = asyncWrapper(async (req, res, next) => {
  //Username
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    return message(401, "Username already exists", res);
  } else {
  }
  const user1 = await User.findOne({ email: req.body.email });
  if (user1) {
    return message(400, "Email already exists", res);
  }
  next();
});

module.exports = checkDuplicate;
