// imports
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const connection = require('../config/connection.js');

// create class
class User extends Model {
    checkPassword(loginPass) {
        return bcrypt.compareSync(loginPass, this.password);
    }
};

// setup table
User.init(
    {
        id: {

        },
        username: {

        },
        email: {

        },
        password: {

        }
    },
    {
        // hooks
        hooks: {

        },
        connection, // connection with sequelize inside it
        timestamps: false, // no timestamps will be posted along with data
        freezeTableName: true, // prevent sequelize from changing table name
        underscored: true,
        modelName: 'user'
    }
);

// export model
module.exports = User;