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