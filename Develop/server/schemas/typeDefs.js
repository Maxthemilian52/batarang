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

      type Query {
        users: [User]
      }
    


`;






module.exports = typeDefs;