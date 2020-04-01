module.exports = (io) => {
	io.on("connection", socket => {
		console.log("someone connected");
		require("./join")(socket);

		socket.on("disconnect", socket => {
			console.log("someone disconnected");
		});
	});
};
