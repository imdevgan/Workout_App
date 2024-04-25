const message = (errorCode, msg, res) => {
  //res.json() convert message to json then sends using res.send()
  res.status(errorCode).json({ code: errorCode, message: msg });
};
module.exports = message;
