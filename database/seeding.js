const faker = require('faker');
const Sequelize = require('sequelize');
const sequelize = require('./db');

const Search = sequelize.define(
	'search',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		name: Sequelize.STRING,
		location: Sequelize.STRING,
		cuisine: Sequelize.STRING
	},
	{
		freezeTableName: true,
		tableName: 'search',
		timestamps: false
	}
);

Search.sync({ force: true })
	.then(() => {
		Search.create({
			name: 'Kinjo',
			location: 'Russian Hill, San Francisco',
			cuisine: 'Japanese'
		});
	})
	.then(() => {
		const cuisines = [
			'Japanese',
			'Chinese',
			'New American',
			'Mexican',
			'Korean',
			'Indian',
			'French',
			'Taiwanese'
		];
		for (let i = 1; i < 100; i++) {
			const random = Math.floor(Math.random() * cuisines.length);
			const restaurant = faker.lorem.word();
			Search.create({
				name: restaurant.charAt(0).toUpperCase() + restaurant.slice(1),
				location: `${faker.address.county()}, ${faker.address.city()}`,
				cuisine: cuisines[random]
			});
		}
		console.log('Data Have Been Successfully Seeded To Database!');
	})
	.catch((err) => {
		console.error('Error During Data Seeding');
	});

module.exports = Search;
