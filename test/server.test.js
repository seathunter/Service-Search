const request = require('supertest');
const app = require('../server/server.js');

describe('Test the root path', () => {
	// test('It should response the search GET method', (done) => {
	// 	return request(app)
	// 		.get('/search')
	// 		.then((response) => {
	// 			expect(response.statusCode).toBe(200);
	// 			done();
	// 		});
	// });

	test('It should response the restaurants GET method', (done) => {
		return request(app)
			.get('/restaurants')
			.then((response) => {
				expect(response.statusCode).toBe(200);
				done();
			});
	});

	test('It should response the cuisines GET method', (done) => {
		return request(app)
			.get('/cuisines')
			.then((response) => {
				expect(response.statusCode).toBe(200);
				done();
			});
	});
});
