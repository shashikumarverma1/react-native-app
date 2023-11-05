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