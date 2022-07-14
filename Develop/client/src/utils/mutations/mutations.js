import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $address: String!, $team: String, $position: String, $gradYear: String! $password: String!) {
    addProfile(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, address: $address, team: $team, position: $position, gradYear: $gradYear password: $password) {
      token
      profile {
        _id
        email
      }
    }
  }
`;