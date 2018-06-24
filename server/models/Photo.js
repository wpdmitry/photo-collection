const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  collection_id: Number,
  path: String,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = {
  model: Photo,
  schema: photoSchema,
};