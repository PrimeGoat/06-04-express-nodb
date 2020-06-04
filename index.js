const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

// const logger = require('./middlewares/logger');
// const timer = require('./middlewares/timer');
const port = process.env.PORT || 8080;
let users = [
  { id: '1', name: 'jd', email: 'jd@me.com', password: '123' },
  { id: '2', name: 'paul', email: 'paul@me.com', password: '123' },
  { id: '3', name: 'lois', email: 'lois@me.com', password: '123' },
  { id: '4', name: 'sidney', email: 'sidney@me.com', password: '123' },
  { id: '5', name: 'canton', email: 'canton@me.com', password: '123' },
];

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
  const user = users.filter(user => {user == req.params.id});
  res.status(200).json({confirmation: 'success', user});
  //res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});