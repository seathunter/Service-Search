const express = require('express');
const cors = require('cors');

// const Search = require('../database/connect-mysql');
const Search = require('../database/connect-postgres');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).send();
});


app.get('/restaurants', (req, res) => {
	const randPostgres = Math.floor(Math.random() * 10000000) + 1;
	Search.findAll({
		attributes: {
			include: []
		},
		where: {
			id: randPostgres
		}
		// offset: randPostgres,
		// limit: 1,
	})
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
		attributes: {
			include: []
		},
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
