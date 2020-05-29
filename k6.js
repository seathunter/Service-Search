/* eslint-disable import/no-unresolved */

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
	vus: 1000,
	duration: '2s',
};

// MySQL
// const dbRows = 100;

// Postgres
const dbRows = 10000000;

export default function () {
	const random = Math.floor(Math.random() * dbRows) + 1;
	http.get(`http://127.0.0.1:3030/restaurant/${random}`);
	sleep(1);
}
