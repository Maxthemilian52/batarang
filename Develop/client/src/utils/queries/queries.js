import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query allPosts {
    allPosts {
      _id
      title
      postContent
      createdAt
      postAuthor
    }
  }
`;

export const QUERY_POST = gql`
  query post($postId: ID!) {
    post(postId: $postId) {
      _id
      title
      postContent
      createdAt
      postAuthor
        comments {
          commentBody
        } 
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
