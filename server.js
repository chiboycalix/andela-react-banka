const app = require('./app');

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`app listening on port ${server.address().port}`);
});

module.exports = app;
