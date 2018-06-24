const attachmentsRouter = require('express').Router();
const {photosPath} = require('../../config');

attachmentsRouter.get('/photos/:id', (req, res) => {
  const filename = req.params.id;
  res.sendFile(filename, {root: photosPath});
});

module.exports = attachmentsRouter;