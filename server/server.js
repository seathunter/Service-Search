const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Search = require('../database/db.js');
// DB connection
require('../database/db');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

// app.get('/:id', (req, res) => {
// 	if (!req.params.id) {
// 		res.status(400);
// 		res.end();
// 	} else {
// 		console.log('this is id', req.params.id);
// 		res.sendFile('index.html', { root: path.resolve(__dirname, '../public') });
// 	}
// });

app.get('/', (req, res) => {
	res.status(200).send();
});

// app.post('/search', (req, res) => {
// 	console.log(req.body.query);
// });

app.get('/restaurants', (req, res) => {
	console.log('reservation get');
	Search.findAll({ attributes: ['restaurants', 'cuisines', 'locations'] })
		.then((data) => {
			// console.log('this is the data', data[0].id);
			res.status(200).send(data);
		})
		.catch((err) => {
			console.log('server err from db', err);
		});
});

app.get('/cuisines', (req, res) => {
	console.log('reservation get');
	Search.findAll({ attributes: ['cuisines'] }).then((data) => {
		// console.log('this is the data', data[0].id);
		res.status(200).send(data);
	});
});

app.get('/locations', (req, res) => {
	console.log('reservation get');
	Search.findAll({ attributes: ['locations'] }).then((data) => {
		// console.log('this is the data', data[0].id);
		res.status(200).send(data);
	});
});

app.get('/search', (req, res) => {
	Search.findOne({ where: { name: 'Kinjo' } }).then((data) => {
		res.status(200);
		res.send(data);
	});
});

module.exports = app;
