const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Search = require('../database/db.js');
// DB connection
require('../database/db');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.get('/', (req, res) => {
	res.status(200);
	res.send();
});

app.post('/search', (req, res) => {
	console.log(req.body.query);
});

app.get('/search', (req, res) => {
	Search.findOne({ where: { name: 'Kinjo' } }).then((data) => {
		res.status(200);
		res.send(data);
	});
});

module.exports = app;
