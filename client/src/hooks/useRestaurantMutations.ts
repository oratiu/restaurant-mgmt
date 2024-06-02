import { useMutation } from '@apollo/client';
import {
  CREATE_RESTAURANT,
  DELETE_RESTAURANT,
  UPDATE_RESTAURANT,
} from '../queries/restaurantQueries.ts';

const useRestaurantMutations = () => {
  const [createRestaurant] = useMutation(CREATE_RESTAURANT, {
    refetchQueries: ['GetRestaurants'],
  });

  const [updateRestaurant] = useMutation(UPDATE_RESTAURANT, {
    refetchQueries: ['GetRestaurants'],
  });

  const [deleteRestaurant] = useMutation(DELETE_RESTAURANT, {
    refetchQueries: ['GetRestaurants'],
  });

  return { createRestaurant, updateRestaurant, deleteRestaurant };
};

export default useRestaurantMutations;
