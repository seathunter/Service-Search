const Sequelize = require('sequelize');

const sequelize = new Sequelize('search', 'root', 'student', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false
});

sequelize.authenticate().then(() => {
	console.log('Connection Has Been Established Successfully');
	require('./seeding');
});

module.exports = sequelize;
