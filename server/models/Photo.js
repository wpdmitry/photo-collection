const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  collectionId: String,
  path: String,
});

photoSchema.statics.getPhotos = async function(collectionId) {
  return await this.find({collectionId}, {collectionId: 0, __v: 0}).exec();
};

const Photo = mongoose.model('Photo', photoSchema);

module.exports = {
  model: Photo,
  schema: photoSchema,
};