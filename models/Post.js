// imports
const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection.js');

// create class
class Post extends Model {};

// setup table
Post.init(
    {
        title: {

        },
        body: {

        }
    },
    {
        connection
    }
);

// export model
module.exports = Post;