const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	process.env.POSTGRES_DB,
	process.env.POSTGRES_USR,
	process.env.POSTGRES_PW, {
		host: process.env.POSTGRES_HOST,
		dialect: 'postgres',
		logging: false
	}
);


sequelize
	.authenticate()
	.then(() => {
		console.log('Connection To Postgres Has Been Established Successfully');
	})
	.catch((err) => {
		console.log(err);
	});

const Search = sequelize.define(
	'restaurants',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		restaurant: Sequelize.STRING,
		location: Sequelize.STRING,
		cuisine: Sequelize.STRING
	},
	{
		freezeTableName: true,
		tableName: 'restaurants',
		timestamps: false
	}
);

module.exports = Search;
