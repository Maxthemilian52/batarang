const { gql } = require('apollo-server-express');

const typeDefs = gql`
      type User {
        _id: ID
        username: String
        administrator: Boolean
        firstName: String
        lastName: String
        email: String
        phone: String
        address: String
        team: String
        position: String
        gradYear: Int
      }

      type Event {
        eventName: String
        date: Int
        volunteers: String
      }

      type Comment {
        postId: ID
        reactionBody: String
        firstName: String
        lastName: String
        createdAt: Int
      }

      type Post {
        postBody: String
        firstName: String
        lastName: String
        createdAt: Int
        
      }

      type Query {
        users: [User]
        event: [Event]
        comment: [Comment]
      }
    


`;






module.exports = typeDefs;