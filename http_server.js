const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
	console.log('server started');
	res.end('HI its DJ');
});

const io = socketio(server);

io.on('connect', (socket, res) => {
	// socket.send('Hello!');

	// or with emit() and custom event names
	socket.emit('greetings', 'Hey! line1');

	// handle the event sent with socket.send()
	socket.on('message', (data) => {
		console.log(data);
	});

	// handle the event sent with socket.emit()
	socket.on('salutations', (elem1, elem2, elem3) => {
		console.log(elem1, elem2, elem3);
	});
});

server.listen(8000);
