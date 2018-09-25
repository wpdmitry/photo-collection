const photosRouter = require('express').Router();
const {model: Photo} = require('../../models/Photo');
const {model: PhotoCollection} = require('../../models/PhotoCollection');
const {app} = require('../../config');

photosRouter.route('/')
  .get(async(req, res) => {
    try {
      const collections = await PhotoCollection.getCollections();
      const data = collections.map(({photos, ...rest}, index) => ({
        ...rest,
        photos: photos.map(photo => ({
          id: photo._id,
          src: `${app.host}:${app.port}/api/attachments/photos/${photo.path}`,
        })),
      }));

      res.send({
        error: null,
        data,
      });
    } catch (error) {
      console.log('error', error);
      res.send({
        error: 'Ошибка при получении файлов',
        data: error,
      })
    }
  })
  .post(async(req, res) => {
    const {files, body: {title, place}} = req;
    const collection = {
      photos: files.map((file) => ({path: file.filename})),
      title,
      place,
    };

    try {
      const result = await PhotoCollection.createNew(collection);
      res.send({
        error: null,
        data: result,
      })
    } catch (error) {
      res.send({
        error: 'Не удалось создать новую коллекцию',
        data: error,
      })
    }
  });

module.exports = photosRouter;
