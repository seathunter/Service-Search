const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	process.env.MYSQL_DB,
	process.env.MYSQL_USR,
	process.env.MYSQL_PW, {
		host: process.env.MYSQL_HOST,
		dialect: 'mysql',
		logging: false
	}
);

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection To MySQL Has Been Established Successfully');
	})
	.catch((err) => {
		console.log(err);
	});

const Search = sequelize.define(
	'search',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		restaurants: Sequelize.STRING,
		locations: Sequelize.STRING,
		cuisines: Sequelize.STRING
	},
	{
		freezeTableName: true,
		tableName: 'search',
		timestamps: false
	}
);

module.exports = Search;
