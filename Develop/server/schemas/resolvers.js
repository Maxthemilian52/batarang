const { AuthenticationError } = require('apollo-server-express');
const { Event, Post, User } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
      users: async () => {
        return User.find({});
      },
      user: async (parent, { email }) => {
        return User.findOne({ email })
      },
      // post: async (parent, { postId }) => {
      //   return Post.findOne({ _id: postId });
      // },
      // posts: async (parent, { email }) => {
      //   const params = email ? { email } : {};
      //   return Post.find(params).sort({ createdAt: -1 });
      // },
      event: async () => {
        return Event.find({});
      },

    },

Mutation: {
  addProfile: async (parent, { firstName, lastName, email, phone, address, team, position, gradYear, password }) => {
    const user = await User.create({ firstName, lastName, email, phone, address, team, position, gradYear, password  });
    console.log(user)
    const token = signToken(user);
    console.log(token)
    return { token, user };
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError('No profile with this email found!');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect password!');
    }

    const token = signToken(user);
    return { token, user };
  },
  // addPost: async (parent, { postText }, context) => {
  //   if (context.user) {
  //     const post = await Post.create({
  //       postText,
  //       postAuthor: context.user.firstName.lastName,
  //     });

  //     await User.findOneAndUpdate(
  //       { _id: context.user._id },
  //       { $addToSet: { posts: post._id } }
  //     );

  //     return post;
  //   }
  //   throw new AuthenticationError('You need to be logged in!');
  // }
},
}

module.exports = resolvers;