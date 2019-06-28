// require modules
const express = require('express');
const path = require('path');
const appConfig = require('./app-config');
const oauthRouter = require('./routes/oauth-route');


const app = express();
const port = process.env.PORT || 3000;
const { clientID } = appConfig;

// serve static file
app.use(express.static(path.join(__dirname, 'public')));

// set view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// routes
app.use(oauthRouter);

// landing page route
app.get('/', (req, res) => {
  res.render('index', {
    clientID,
    port,
  });
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
