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
			Search.create({
				name: faker.lorem.word(),
				location: `${faker.address.county()}, ${faker.address.city()}`,
				cuisine: cuisines[random]
			});
		}
	});

// Search.create({
// 	name: faker.company.companyName(),
// 	location: faker.address.city()
// }).then((entry) => {
// 	console.log('successfully generated entry', entry.id);
// });
