const config = require('./config');
const app = require('./middleware')(config.photosPath);
const db = require('./models')(config.db);

db.connect(() => {
  app.listen(config.port, () => console.log(`Сервер запущен на порту ${config.port}`));
});
