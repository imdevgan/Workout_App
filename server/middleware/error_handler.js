//Error Handler Middleware handles errors if the errors are not related to 'not-found'
const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(err.status || 500).json({ msg: err.message });
};

module.exports = errorHandlerMiddleware;
