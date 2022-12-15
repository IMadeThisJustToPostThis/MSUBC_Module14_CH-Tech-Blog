const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection.js');

// create class
class Comment extends Model {};

// setup table
Comment.init(
    {
        id: {

        },
        body: {

        },
        date: {

        }
    },
    {
        connection
    }
);

// export model
module.exports = Comment;