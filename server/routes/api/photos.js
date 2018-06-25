const photosRouter = require('express').Router();
const {model: Photo} = require('../../models/Photo');
const {model: PhotoCollection} = require('../../models/PhotoCollection');
const {host, port} = require('../../config');

photosRouter.route('/')
  .get(async(req, res) => {
    try {
      const сollections = await PhotoCollection.getCollections();
      console.log(сollections[0]);
      const data = сollections.map(({photos, ...rest}, index) => ({
        ...rest,
        photos: photos.map(photo => ({
          id: photo._id,
          src: `${host}:${port}/api/attachments/photos/${photo.path}`,
        })),
      }));

      console.log(data[0]);

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
    };
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
