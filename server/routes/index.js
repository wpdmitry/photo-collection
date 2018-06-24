module.exports = (app) => {
  const apiRouter = require('./api');

  app.use('/api', apiRouter);
};