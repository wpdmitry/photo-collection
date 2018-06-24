const path = require('path');

module.exports = {
  host: 'http://localhost',
  port: 3000,
  photosPath: path.join(__dirname, 'uploads'),
  db: {
    url: 'mongodb://127.0.0.1:27017/testPhotos',
    options: {},
  }
};