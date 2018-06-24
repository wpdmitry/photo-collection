module.exports = (photosPath) => {
  const express = require('express');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const multer  = require('multer');
  const upload = multer({ dest: photosPath });
  const path = require('path');
  const setHeaders = require('./setHeaders');

  const app = express();

  app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
  app.use(cookieParser());
  app.use(upload.array('photo'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(setHeaders);

  require('../routes')(app);

  return app;
};