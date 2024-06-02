import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Restaurant {
    id: ID!
    name: String!
    address: String!
    email: String!
    phone: String!
  }

  type RestaurantConnection {
    totalCount: Int!
    restaurants: [Restaurant!]!
  }

  type Query {
    restaurants(limit: Int, offset: Int, searchTerm: String): RestaurantConnection!
  }

  type Mutation {
    createRestaurant(name: String!, address: String!, email: String!, phone: String!): Restaurant
    updateRestaurant(id: ID!, name: String!, address: String!, email: String!, phone: String!): Restaurant
    deleteRestaurant(id: ID!): Boolean
  }
`;
