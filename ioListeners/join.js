module.exports = socket => {
	socket.on("join", room => {

		socket.join(room);
		socket.emit("joinStatus", {room, success: true});

		console.log("Someone wants to join room " + room);
	});
};
