
const faker = require('faker');
const path = require('path');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const numOfRecords = 100000;
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

console.log(`Ok: lets add ${numOfRecords} records to /data/data.csv`);
console.log('Running...');
console.log('Maybe go put the kettle on');

const writer = csvWriter({
	headers: ['restaurant', 'location', 'cuisine']
});
writer.pipe(fs.createWriteStream(path.join(__dirname, '..', 'data', 'data.csv')));

for (let i = 0; i < numOfRecords; i++) {
	const random = Math.floor(Math.random() * cuisine.length);
	writer.write([
		faker.lorem.word(),
		`${faker.address.county()}, ${faker.address.city()}`,
		cuisine[random]
	]);
}
writer.end();

console.log('Done: Check /data/data.csv');


// Search.sync({ force: true })
// 	.then(() => {
// 		Search.create({
// 			restaurants: 'Kinjo',
// 			locations: 'Russian Hill, San Francisco',
// 			cuisines: 'Japanese'
// 		});
// 	})
// 	.then(() => {
// 		for (let i = 1; i < 100; i++) {
// 			const random = Math.floor(Math.random() * cuisine.length);
// 			const restaurant = faker.lorem.word();
// 			Search.create({
// 				restaurants: restaurant.charAt(0).toUpperCase() + restaurant.slice(1),
// 				locations: `${faker.address.county()}, ${faker.address.city()}`,
// 				cuisines: cuisine[random]
// 			});
// 		}
// 		console.log('Data Has Been Successfully Seeded To Database!');
// 	})
// 	.catch((err) => {
// 		console.error('Error During Data Seeding');
// 	});
