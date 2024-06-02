import { useQuery, gql } from '@apollo/client';
import { Restaurant } from '../types';

const SEARCH_RESTAURANTS = gql`
  query SearchRestaurants($searchTerm: String!) {
    searchRestaurants(searchTerm: $searchTerm) {
      id
      name
      address
      email
      phone
    }
  }
`;

const useSearchRestaurants = (searchTerm: string) => {
  const { loading, error, data } = useQuery<{
    searchRestaurants: Restaurant[];
  }>(SEARCH_RESTAURANTS, {
    variables: { searchTerm },
    skip: searchTerm === '', // Skip the query if searchTerm is empty
  });

  return {
    isLoading: loading,
    error,
    data: data?.searchRestaurants,
  };
};

export default useSearchRestaurants;
