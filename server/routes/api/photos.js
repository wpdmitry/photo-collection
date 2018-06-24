const photosRouter = require('express').Router();
const {model: Photo} = require('../../models/Photo');
const {host, port} = require('../../config');

photosRouter.route('/')
  .get((req, res) => {
    Photo.find({}, (err, data) => {
      data = data.map(({_id, path}) => ({
        id: _id,
        src: `${host}:${port}/api/attachments/photos/${path}`,
      }));

      res.send(data);
    });
  })
  .post((req, res) => {
    const files = req.files;
    console.log(files);

    files
      .map(file => new Photo({path: file.filename}))
      .forEach(photo => photo.save());

    res.send({status: 'ok'});
  });

module.exports = photosRouter;
