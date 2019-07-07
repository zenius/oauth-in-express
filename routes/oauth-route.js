const express = require('express');
const axios = require('axios');
const appConfig = require('../app-config');

const oauthRouter = express.Router();
const { clientID, clientSecret } = appConfig;

oauthRouter.get('/oauth/redirect', (req, res) => {
  const { code } = req.query;
  // make a POST request to get access token
  axios({
    method: 'POST',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`,
    headers: {
      accept: 'application/json',
    },
  }).then((response) => {
    const { access_token } = response.data;

    // redirect to home page
    res.redirect(`/home-page?access_token=${access_token}`);
  });
});

module.exports = oauthRouter;
