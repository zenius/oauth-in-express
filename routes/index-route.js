const express = require('express');
const axios = require('axios');
const appConfig = require('../app-config');

const indexRouter = express.Router();
const { clientID } = appConfig;

// routing function
function router(port) {
  // landing page
  indexRouter.get('/', (req, res) => {
    res.render('index', {
      clientID,
      port,
    });
  });

  // home page
  indexRouter.get('/home-page', (req, res) => {
    const { access_token } = req.query;

    // get the user info from the access token
    axios({
      method: 'GET',
      url: 'https://api.github.com/user',
      headers: {
        Authorization: `token ${access_token}`,
      },
    })
      .then((result) => {
        const { name, email } = result.data;

        // here we are sending name and email as information to client generated from access_token
        res.render('home-page', {
          username: name,
          email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return indexRouter;
}

module.exports = router;
