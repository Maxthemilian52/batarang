const { AuthenticationError } = require('apollo-server-express');
const { Event, Post, User } = require('../models');

const resolvers = {
    Query: {
      users: async () => {
        return User.find({});
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('posts')
      },
      event: async () => {
        return Event.find({});
      },
      comment: async (parent, { postId }, context) => {
        if(context.user) {
          return Post.findOne({ _id: postId })
        }
     },
      post: async () => {
        return Post.find({});
    },
}
};

module.exports = resolvers;