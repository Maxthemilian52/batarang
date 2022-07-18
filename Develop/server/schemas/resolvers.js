const { AuthenticationError } = require('apollo-server-express');
const { Event, Post, User } = require('../models');
const { signToken, authMiddleware } = require('../utils/auth')

const resolvers = {
    Query: {
      allUsers: async () => {
        return User.find({});
      },
      user: async (parent, { email }) => {
        return User.findOne({ email })
      },
      post: async (parent, { postId }) => {
        return Post.findOne({ _id: postId });
      },
      // posts: async (parent, { postAuthor }) => {
      //   const params = postAuthor ? { postAuthor } : {};
      //   return Post.find(params).sort({ createdAt: -1 });
      // },
      allEvents: async () => {
        return Event.find({});
      },
      allPosts: async () => {
        return Post.find({});
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
  addPost: async (parent, { title, postContent }, context) => {
    console.log(context)
    if (context.user) {
      const post = await Post.create({
        postContent,
        title,
        postAuthor: context.user.lastName,
      });
      
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { posts: post._id } }
      );
        
      return post;
    }
    throw new AuthenticationError('You need to be logged in!');
  },
  removePost: async (parent, { postId }, context) => {
    if (context.user) {
      const post = await Post.findOneAndDelete({
        _id: postId,
        postAuthor: context.user.lastName,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { posts: post._id } }
      );

      return post;
    }
    throw new AuthenticationError('You need to be logged in!');
  },
  addComment: async (parent, { postId, commentBody }, context) => {
    if (context.user) {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: {
            comments: { commentBody, commentAuthor: context.user.lastName },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    throw new AuthenticationError('You need to be logged in!');
  },
  removeComment: async (parent, { postId, commentId }, context) => {
    if (context.user) {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $pull: {
            comments: {
              _id: commentId,
              commentAuthor: context.user.lastName,
            },
          },
        },
        { new: true }
      );
    }
    throw new AuthenticationError('You need to be logged in!');
  },
},
}

module.exports = resolvers;