const express = require('express');
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const Search = require('../database/connect-mysql');

const app = express();

app.use(cors());
// app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.get('/', (req, res) => {
	res.status(200).send();
});

app.get('/restaurants', (req, res) => {
	Search.findAll({ attributes: ['restaurants', 'cuisines', 'locations'] })
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			console.log('server err from db', err);
		});
});

// Add a Get-restaurant by ID for stress testing the DB
app.get('/restaurant/:id', (req, res) => {
	Search.findAll({
		attributes: ['restaurants', 'cuisines', 'locations'],
		where: {
			id: req.params.id
		}
	})
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			console.log('server err from db', err);
		});
});

app.get('/cuisines', (req, res) => {
	console.log('/cuisines get');
	Search.findAll({ attributes: ['cuisines'] }).then((data) => {
		res.status(200).send(data);
	});
});

app.get('/locations', (req, res) => {
	console.log('/locations get');
	Search.findAll({ attributes: ['locations'] }).then((data) => {
		res.status(200).send(data);
	});
});

app.get('/search', (req, res) => {
	console.log('/search get');
	Search.findOne({ where: { name: 'Kinjo' } }).then((data) => {
		res.status(200);
		res.send(data);
	});
});

module.exports = app;
