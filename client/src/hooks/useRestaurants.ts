import { useQuery } from '@apollo/client';
import { Restaurant } from '../types';
import { GET_RESTAURANTS } from '../queries/restaurantQueries.ts';

interface RestaurantConnection {
  totalCount: number;
  restaurants: Restaurant[];
}

const useRestaurants = (limit: number, offset: number, searchTerm: string) => {
  return useQuery<{ restaurants: RestaurantConnection }>(GET_RESTAURANTS, {
    variables: { limit, offset, searchTerm },
  });
};

export default useRestaurants;
