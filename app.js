const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();
const initRoutes = require('./routes/init');
// importing db connection
const connectDB = require('./db');
// parse application/json

connectDB.on('error', console.error.bind(console, 'connection error:'));
connectDB.once('open', function () {
  app.use(bodyParser.json());

  initRoutes(app);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
