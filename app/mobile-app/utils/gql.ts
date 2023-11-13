import { gql } from "@apollo/client";

export const USER=gql`
query{
  users {
    id
    email
    firstName
  }
}
`
export const LOGIN_AUTH=gql`
  mutation authenticateUserWithPassword($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      __typename
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
        email
          id 
        }
      }
    }
  }
`