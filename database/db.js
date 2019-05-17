const Sequelize = require('sequelize');
const mysql = require('mysql');
// const Search = require('./seeding');

// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'student'
// });

// connection.query('DROP DATABASE IF EXISTS Search', () => {});
// connection.query('CREATE DATABASE Search', () => {
const sequelize = new Sequelize('search', 'root', 'student', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false
});

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection Has Been Established Successfully');
		require('./seeding');
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = sequelize;
// });
