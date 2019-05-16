const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const Axios = require('axios');
// const db = require('../database/db');

const app = express();
const port = 3030;

// DB connection
const db = require('../database/db');

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.status(200);
	res.send();
});

app.listen(port, () => {
	console.log(`Connected to ${port}`);
});
