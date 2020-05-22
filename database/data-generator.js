/* eslint-disable no-await-in-loop */

const faker = require('faker');
const path = require('path');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const numOfRecords = 10000000;

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
console.time('Took');

// Create the CSV write stream
const writer = csvWriter({ headers: ['restaurant', 'location', 'cuisine'] });

// Create the write stream to the file
const writeFile = fs.createWriteStream(path.join(__dirname, '..', 'data', 'data.csv'), {
	encoding: 'utf8',
	flags: 'w'
})
	.on('open', () => console.log('CSV file open: Running...'));

// Don't blow up the JS stack
const drainStream = () => new Promise(res => writeFile.once('drain', res));

// Pipe the writer to the file
writer.pipe(writeFile);

(async function drainableWrite() {
	// Loop the content
	for (let i = 0; i < numOfRecords; i++) {
		const random = Math.floor(Math.random() * cuisine.length);
		const canContinue = writer.write([
			faker.lorem.word(),
			`${faker.address.county()}, ${faker.address.city()}`,
			cuisine[random]
		]);
		if (!canContinue) {
			await drainStream();
		}
	}

	// Finish this
	writer.end();
	writer.on('finish', () => {
		console.log('Done: Check /data/data.csv');
		console.timeEnd('Took');
	});
}());
