const express = require('express');
const morgan = require('morgan');
// const Sequelize = require('sequelize');
// const bodyParser = require('body-parser');
const Search = require('../database/seeding');
// const Axios = require('axios');

// DB connection
const sequelize = require('../database/db');

// const Users = sequelize.import('../');

const app = express();
const port = 3030;

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.status(200);
	res.send();
});

app.get('/search', (req, res) => {
	Search.findOne({ where: { name: 'Kinjo' } }).then((data) => {
		console.log(data);
	});
	res.status(200);
	res.send();
});

app.listen(port, () => {
	console.log(`Connected to ${port}`);
});
