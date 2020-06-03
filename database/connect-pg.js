const { Pool } = require('pg');

const pool = new Pool({
	user: process.env.POSTGRES_USR,
	host: process.env.POSTGRES_HOST,
	database: process.env.POSTGRES_DB,
	password: process.env.POSTGRES_PW,
});

pool.on('error', (err, client) => {
	console.error('Unexpected error on idle client', err);
	process.exit(-1);
});

module.exports = pool;
