module.exports = (io) => {
	io.on("connection", socket => {
		console.log(`connection ${socket.id} connected`);
		require("./join")(socket);

		socket.on("disconnect", socket => {
			console.log(`connection ${socket.id} disconnected`);
		});
	});
};
