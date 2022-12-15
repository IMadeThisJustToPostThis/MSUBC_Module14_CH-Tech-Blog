// import models
const User = require('./User.js');
const Post = require('./Post.js');
const Comment = require('./Comment.js');

//setup relationships
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

//export models under index.js
module.exports = {
    User,
    Comment,
    Post
};