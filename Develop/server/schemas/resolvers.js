const { AuthenticationError } = require('apollo-server-express');
const { Comment, Event, Post, User } = require('../models');

const resolvers = {
    Query: {
      users: async () => {
        return User.find({});
    },
      event: async () => {
        return Event.find({});
    },
      comment: async () => {
        return Post.find({});
    },
      post: async () => {
        return Comment.find({});
    },
}
};

module.exports = resolvers;