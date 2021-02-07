const express = require('express'),
  app = express(),
  cors = require('cors');

app.use(cors())
//Router:
const notificationRouter = require('./api/routes/notification');

//Routes:
app.use('/notification', notificationRouter);

module.exports = app;