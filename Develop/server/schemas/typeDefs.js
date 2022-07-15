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
        date: Int
        volunteers: String
      }

      type Comment {
        _id: ID
        commentBody: String
        firstName: String
        lastName: String
        createdAt: Int
      }

      type Post {
        postBody: String
        firstName: String
        lastName: String
        createdAt: Int
        comments: [Comment]!
      }

      type Query {
        users: [User]
        user(email: String!): User
        event: [Event]
        comment: [Comment]
        posts: [Post]
      }
    
    type Mutation {
      addProfile(firstName: String!, lastName: String!, email: String!, phone: String!, address: String!, team: String, position: String, gradYear: String! password: String!): Auth
      login(email: String!, password: String!): Auth
    }


`;






module.exports = typeDefs;