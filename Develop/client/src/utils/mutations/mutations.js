import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $address: String!, $team: String, $position: String, $gradYear: String! $password: String!) {
    addProfile(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, address: $address, team: $team, position: $position, gradYear: $gradYear password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $postContent: String!) {
    addPost(title: $title, postContent: $postContent){
      title
      postContent
    }
  }
`;