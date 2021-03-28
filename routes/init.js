const userRoutes = require('./userRoutes');

const initalizeRoutes = app => {
  console.log(22);
  app.use('/users', userRoutes);
  return app;
};

module.exports = initalizeRoutes;
