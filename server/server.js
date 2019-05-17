const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const Search = require('../database/seeding');
// const Axios = require('axios');

const app = express();
const port = 3030;

// DB connection
const sequelize = require('../database/db');

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.status(200);
	res.send();
});

app.get('/search', (req, res) => {
	sequelize.findOne({ search: { name: 'Kinjo' } }, (result) => {
		console.log(result);
	});
});

app.listen(port, () => {
	console.log(`Connected to ${port}`);
});
