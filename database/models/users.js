'use strict';
module.exports = (sequelize, DataTypes) => {
	const users = sequelize.define('users', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING(320),
		password: DataTypes.STRING,
		emailVerified: DataTypes.BOOLEAN
	}, {});
	users.associate = function (models) {
		// associations can be defined here
	};
	return users;
};
