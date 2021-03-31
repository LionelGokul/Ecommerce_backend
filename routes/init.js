const userRoutes = require('./userRoutes');
const {
  notFound,
  errorHandler,
} = require('../middleware/errorHandlerMiddleware');
const initalizeRoutes = app => {
  console.log(22);

  //defualt
  app.get('/', function (req, res) {
    res.send('express setup is running!!!!!');
  });

  app.use('/users', userRoutes);

  app.use(notFound);
  app.use(errorHandler);

  return app;
};

module.exports = initalizeRoutes;
