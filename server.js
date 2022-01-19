const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const server = app.listen(8000, (req, res) => {
	console.log('server started at 8000!!');
});

const io = socketio(server, {
	origin: '*'
});

io.on('connect', (socket, res) => {
	// socket.emit('messageFromServer', 'data from server line 1');
	socket.on('messageToServer', (dataFromClient) => {
		// console.log(dataFromClient);
		console.log(dataFromClient.text);
		console.log(dataFromClient.name);
		// socket.emit only send to the one the msg comes from //
		// socket.emit('messageFromServer', dataFromClient);
		io.emit('messageFromServer', dataFromClient);
	});
});
