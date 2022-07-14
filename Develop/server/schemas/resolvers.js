const { AuthenticationError } = require('apollo-server-express');
const { Event, Post, User } = require('../models');

const resolvers = {
    Query: {
      users: async () => {
        return User.find({});
      },
      event: async () => {
        return Event.find({});
      },
      post: async () => {
        return Post.find({});
      },
      // comment: async (parent, { postId }, context) => {
        //     if(context.user) {
        //       return Post.findOne({ _id: postId })
        //     }
        //  },
         // user: async (parent, { username }) => {
      //   return User.findOne({ username }).populate('posts')
      // },
},
      // Mutation: {
      //   addProfile: async (parent, { username, email, password }) => {
      //     const user = await User.create({ username, email, password });
      //     const token = signToken(user);
      //     return { token, user };
      //   },
      // }
};

module.exports = resolvers;