'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('games', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			type: {
				type: Sequelize.ENUM('standard', 'democracy'),
				defaultValue: 'standard'
			},
			status: {
				type: Sequelize.ENUM('standby', 'active', 'ended'),
				defaultValue: 'standby'
			},
			maxRounds: {
				type: Sequelize.INTEGER,
				defaultValue: 1,
				validate: {
					min: 1,
					max: 10
				}
			},
			maxPlayers: {
				type: Sequelize.INTEGER,
				defaultValue: 8,
				validate: {
					min: 1,
					max: 20
				}
			},
			robot: {
				type: Sequelize.BOOLEAN,
				defaultValue: true
			},
			timeout: {
				type: Sequelize.INTEGER,
				defaultValue: 45
			},
			public: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface) => {
		return queryInterface.dropTable('games');
	}
};
