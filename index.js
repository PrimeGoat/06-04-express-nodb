const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const port = process.env.PORT || 8080
let users = [
  { name: 'jd', email: 'jd@me.com', password: '123' },
  { name: 'paul', email: 'paul@me.com', password: '123' },
  { name: 'lois', email: 'lois@me.com', password: '123' },
  { name: 'sidney', email: 'sidney@me.com', password: '123' },
  { name: 'canton', email: 'canton@me.com', password: '123' },
]
// this hooks up use of static routes
// app.use(express.static(path.join(__dirname, 'public')))
// sends string to browser
// app.get('/', (req, res) => {
//   res.send('Hello Express App')
// })
app.get('/', (req, res) => {
  return res.status(200).json({ confirmation: 'success', users })
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});





const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', (request, response) => {
	//
	response.send('Hello Express App');
});
*/

app.listen(3000, () => {
	console.log("Listening on port " + port);
});

console.log(app);