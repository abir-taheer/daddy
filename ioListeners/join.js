module.exports = socket => {
	socket.on("join", room => {

		socket.join(room);
		socket.emit("joinStatus", {room, success: true});

	});
};
