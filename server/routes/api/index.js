const apiRouter = require('express').Router();
const photosRouter = require('./photos');
const attachmentsRouter = require('./attachments');

apiRouter.use('/photos', photosRouter);
apiRouter.use('/attachments', attachmentsRouter);

module.exports = apiRouter;
