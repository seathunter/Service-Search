const express = require('express');
const cors = require('cors');

const pool = require('../database/connect-pg');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).send();
});

// Endpoints

// "GetAll" now responds with a randomized ID for testing purposes
app.get('/restaurants', (req, res) => {
	const randID = Math.floor(Math.random() * 10000000) + 1;
	const text = 'SELECT * FROM restaurants WHERE id = $1';
	pool.connect((err, client, done) => {
		if (err) console.log('Can not connect to the DB', err);
		client.query(text, [randID], (error, result) => {
			done();
			if (error) {
				console.log(error);
				res.status(400).send(error);
			}
			res.status(200).send(result.rows);
		});
	});
});


// Add a Get-restaurant by ID for stress testing the DB
app.get('/restaurant/:id', (req, res) => {
	const text = 'SELECT * FROM restaurants WHERE id = $1';
	pool.connect((err, client, done) => {
		if (err) console.log('Can not connect to the DB', err);
		client.query(text, [req.params.id], (error, result) => {
			done();
			if (error) {
				console.log(error);
				res.status(400).send(error);
			}
			res.status(200).send(result.rows);
		});
	});
});


// app.get('/cuisines', (req, res) => {
// 	console.log('/cuisines get');
// 	Search.findAll({ attributes: ['cuisines'] }).then((data) => {
// 		res.status(200).send(data);
// 	});
// });

// app.get('/locations', (req, res) => {
// 	console.log('/locations get');
// 	Search.findAll({ attributes: ['locations'] }).then((data) => {
// 		res.status(200).send(data);
// 	});
// });

// app.get('/search', (req, res) => {
// 	console.log('/search get');
// 	Search.findOne({ where: { name: 'Kinjo' } }).then((data) => {
// 		res.status(200);
// 		res.send(data);
// 	});
// });

module.exports = app;
