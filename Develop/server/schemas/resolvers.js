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
    users: async () => {
      return Comment.find({});
  },
}
};

module.exports = resolvers;