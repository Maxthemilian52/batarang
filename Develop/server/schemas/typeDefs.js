const { gql } = require('apollo-server-express');

const typeDefs = gql`
      type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        phone: String
        address: String
        team: String
        position: String
        gradYear: Int
      }

      type Auth {
        token: ID!
        user: User
      }

      type Event {
        eventName: String
        date: String
        eventSummary: String
        volunteers: String
      }

      type Comment {
        _id: ID
        commentBody: String
        commentAuthor: String
        createdAt: String
      }

      type Post {
        _id: ID
        title: String
        postContent: String
        postAuthor: String
        createdAt: String
        comments: [Comment]!
        user: User
      }

      type Query {
        allUsers: [User]
        user(email: String!): User
        allEvents: [Event]
        comment: [Comment]
        allPosts: [Post]
        post(postId: ID!): Post
      }
    
    type Mutation {
      addProfile(firstName: String!, lastName: String!, email: String!, phone: String!, address: String!, team: String, position: String, gradYear: String! password: String!): Auth
      login(email: String!, password: String!): Auth
      addPost(title: String!, postContent: String!): Post
      removePost(postId: ID!): Post
      addComment(postId: ID!, commentBody: String!): Post
      removeComment(posttId: ID!, commentId: ID!): Post
    }


`;






module.exports = typeDefs;