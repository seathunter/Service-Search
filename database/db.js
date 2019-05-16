const Sequelize = require('sequelize');

const sequelize = new Sequelize('search', 'root', 'student', {
	host: 'localhost',
	dialect: 'mysql'
});

sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully');
});

module.exports = sequelize;
