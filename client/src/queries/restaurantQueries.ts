import { gql } from '@apollo/client';

export const GET_RESTAURANTS = gql`
  query GetRestaurants($limit: Int, $offset: Int, $searchTerm: String) {
    restaurants(limit: $limit, offset: $offset, searchTerm: $searchTerm) {
      totalCount
      restaurants {
        id
        name
        address
        email
        phone
      }
    }
  }
`;
export const CREATE_RESTAURANT = gql`
  mutation CreateRestaurant(
    $name: String!
    $address: String!
    $email: String!
    $phone: String!
  ) {
    createRestaurant(
      name: $name
      address: $address
      email: $email
      phone: $phone
    ) {
      id
      name
      address
      email
      phone
    }
  }
`;

export const UPDATE_RESTAURANT = gql`
  mutation UpdateRestaurant(
    $id: ID!
    $name: String!
    $address: String!
    $email: String!
    $phone: String!
  ) {
    updateRestaurant(
      id: $id
      name: $name
      address: $address
      email: $email
      phone: $phone
    ) {
      id
      name
      address
      email
      phone
    }
  }
`;

export const DELETE_RESTAURANT = gql`
  mutation DeleteRestaurant($id: ID!) {
    deleteRestaurant(id: $id)
  }
`;
