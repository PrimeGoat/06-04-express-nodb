const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const users = require('./models/users');

// const logger = require('./middlewares/logger');
// const timer = require('./middlewares/timer');
const port = process.env.PORT || 8080;


app.use(morgan('dev'));
// app.use(timer);
// app.use(logger)
// this hooks up use of static routes
// app.use(express.static(path.join(__dirname, 'public')))
// sends string to browser
// app.get('/', (req, res) => {
//   res.send('Hello Express App')
// })

app.get('/api/v1', (req, res) => {
  return res.status(200).json({ confirmation: 'success', users });
});

app.get('/api/v1/:id', (req, res) => {
  const user = users.filter(user => user.id === req.params.id);

  if(user.length == 0) {
    return res.status(404).json({confirmation: 'failed', message: "User not found"});
  }

  return res.status(200).json({confirmation: 'success', user});
  //res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});