const cors = require("cors");

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:3001").split(" ");

const corsOptions = {

	origin: (origin, callback) => {

		if (
			! origin ||
			allowedOrigins.includes(origin) ||
			process.env.NODE_ENV === "development"
		) {

			callback(null, true);

		} else {

			callback(new Error('Not allowed by CORS'));

		}

	},

	credentials: true
};

module.exports = cors(corsOptions);
