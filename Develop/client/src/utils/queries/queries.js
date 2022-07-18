import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query allPosts {
    allPosts {
      title
      postContent
      createdAt
      postAuthor
    }
  }
`;

export const QUERY_EVENTS = gql`
  query allEvents {
    allEvents {
      eventName
      date
      eventSummary
      volunteers
    }
  }
`;
export const QUERY_USERS = gql`
  query allUsers {
    allUsers {
      firstName
      lastName
      email
      phone
      address
      team
      position
      gradYear
    }
  }
`;
