// require modules
const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index-route')(port);
const oauthRouter = require('./routes/oauth-route');

const app = express();

// serve static file
app.use(express.static(path.join(__dirname, 'public')));

// set view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// routes
app.use(indexRouter);
app.use(oauthRouter);

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
