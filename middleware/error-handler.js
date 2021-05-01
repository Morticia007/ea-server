// basic error handling middleware as required to catch errors in express via next(error)
const errorHandler = (error, req, res, next) => {
  res.send({ error });
};

module.exports = errorHandler;
