const faker = require('faker');
const Search = require('./db');
// const Sequelize = require('sequelize');
// const sequelize = require('./db');

// const Search = sequelize.define(
// 	'search',
// 	{
// 		id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
// 			autoIncrement: true,
// 			allowNull: false
// 		},
// 		name: Sequelize.STRING,
// 		location: Sequelize.STRING,
// 		cuisine: Sequelize.STRING
// 	},
// 	{
// 		freezeTableName: true,
// 		tableName: 'search',
// 		timestamps: false
// 	}
// );

Search.sync({ force: true })
	.then(() => {
		Search.create({
			restaurants: 'Kinjo',
			locations: 'Russian Hill, San Francisco',
			cuisines: 'Japanese'
		});
	})
	.then(() => {
		const cuisine = [
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
			const random = Math.floor(Math.random() * cuisine.length);
			const restaurant = faker.lorem.word();
			Search.create({
				restaurants: restaurant.charAt(0).toUpperCase() + restaurant.slice(1),
				locations: `${faker.address.county()}, ${faker.address.city()}`,
				cuisines: cuisine[random]
			});
		}
		console.log('Data Have Been Successfully Seeded To Database!');
	})
	.catch((err) => {
		console.error('Error During Data Seeding');
	});


// module.exports = Search;
