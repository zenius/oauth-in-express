const express = require('express');
const appConfig = require('../app-config');

const indexRouter = express.Router();
const { clientID } = appConfig;

// routing function
function router(port) {
  indexRouter.get('/', (req, res) => {
    res.render('index', {
      clientID,
      port,
    });
  });
  return indexRouter;
}

module.exports = router;
