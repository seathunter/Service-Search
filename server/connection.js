const app = require('./server.js');

const port = 3030;

app.listen(port, () => {
	console.log(`Connected to ${port}`);
});
