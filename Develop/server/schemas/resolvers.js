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

Mutation: {
  addProfile: async (parent, { firstName, lastName, email, phone, address, team, position, gradYear, password }) => {
    const profile = await Profile.create({ firstName, lastName, email, phone, address, team, position, gradYear, password  });
    const token = signToken(profile);

    return { token, profile };
  },
  login: async (parent, { email, password }) => {
    const profile = await Profile.findOne({ email });

    if (!profile) {
      throw new AuthenticationError('No profile with this email found!');
    }

    const correctPw = await profile.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect password!');
    }

    const token = signToken(profile);
    return { token, profile };
  },
},
}

module.exports = resolvers;