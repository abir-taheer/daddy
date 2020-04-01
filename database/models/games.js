'use strict';
module.exports = (sequelize, DataTypes) => {
	const games = sequelize.define('games', {
		name: DataTypes.STRING,
		type: {
			type: DataTypes.ENUM('standard', 'democracy'),
			defaultValue: 'standard'
		},
		status: {
			type: DataTypes.ENUM('standby', 'active', 'ended'),
			defaultValue: 'standby'
		},
		maxRounds: {
			type: DataTypes.INTEGER,
			defaultValue: 1,
			validate: {
				min: 1,
				max: 10
			}
		},
		maxPlayers: {
			type: DataTypes.INTEGER,
			defaultValue: 8,
			validate: {
				min: 1,
				max: 20
			}
		},
		robot: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		timeout: {
			type: DataTypes.INTEGER,
			defaultValue: 45
		},
		public: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
	}, {});
	games.associate = function (models) {
		// associations can be defined here
	};
	return games;
};
