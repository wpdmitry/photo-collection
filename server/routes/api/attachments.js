const attachmentsRouter = require('express').Router();
const {app} = require('../../config');

attachmentsRouter.get('/photos/:id', (req, res) => {
  const filename = req.params.id;
  res.sendFile(filename, {root: app.photosPath});
});

module.exports = attachmentsRouter;
