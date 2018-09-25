module.exports = ({url, options}) => ({
  connect: (callback) => {
    const mongoose = require('mongoose');

    mongoose.connect(url, options);
    const db = mongoose.connection;

    db.on('error', err => {
      console.log('Не удалось установить соединение с базой данных ', err);
    });

    db.on('disconnect', err => {
      console.log('База данных отключена');
      mongoose.connect(url, options);
    });

    db.on('reconnected', function () {
      console.log('База данных переподключена');
    });

    db.once('open', () => {
      console.log('Соединение с базой данных установлено');
      callback();
    });
  }
});