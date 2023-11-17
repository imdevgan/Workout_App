//Async Wrapper handles error for the controllers and passes them to 'next'
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports=asyncWrapper