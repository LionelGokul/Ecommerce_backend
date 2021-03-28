const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// importing db connection
const connectDB = require('./db');
// parse application/json

connectDB.on('error', console.error.bind(console, 'connection error:'));
connectDB.once('open', function () {
  app.use(bodyParser.json());
  const initRoutes = require('./routes/init');
  initRoutes(app);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
