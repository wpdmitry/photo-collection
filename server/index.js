const config = require('./config');
const app = require('./middleware')(config.app);
const db = require('./models')(config.db);

db.connect(() => {
  app.listen(config.app.port, () => console.log(`Сервер запущен на порту ${config.app.port}`));
});
