import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../api';
import { Container, Box, Typography } from '@mui/material';
import useRestaurants from '../hooks/useRestaurants';
import useRestaurantMutations from '../hooks/useRestaurantMutations';
import RestaurantForm from './RestaurantForm';
import RestaurantList from './RestaurantList';
import { Restaurant } from '../types';

interface RestaurantListWrapperProps {
  searchTerm: string;
  page: number;
  limit: number;
  onTotalCountChange: (totalCount: number) => void; // New prop to handle total count change
}

const RestaurantListWrapper: React.FC<RestaurantListWrapperProps> = ({
  searchTerm,
  page,
  limit,
  onTotalCountChange,
}) => {
  const offset = (page - 1) * limit;
  const { data, error, loading } = useRestaurants(limit, offset, searchTerm);
  const { createRestaurant, updateRestaurant, deleteRestaurant } =
    useRestaurantMutations();

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Restaurant>>({});

  const handleOpen = (restaurant?: Partial<Restaurant>) => {
    setFormData(restaurant || {});
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleFormSubmit = (data: Partial<Restaurant>) => {
    if (data.id) {
      updateRestaurant({ variables: { ...data } });
    } else {
      createRestaurant({ variables: { ...data } });
    }
    setOpen(false);
  };

  const handleDelete = (id: number) => {
    deleteRestaurant({ variables: { id } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching restaurants: {error.message}</div>;

  // Update total count whenever data changes
  if (data && data.restaurants) {
    onTotalCountChange(data.restaurants.totalCount);
  }

  const restaurants = data?.restaurants?.restaurants || [];

  return (
    <ApolloProvider client={client}>
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4">Restaurants</Typography>
          <RestaurantList
            restaurants={restaurants}
            handleOpen={handleOpen}
            handleDelete={handleDelete}
          />
        </Box>
        <RestaurantForm
          initialData={formData}
          onSubmit={handleFormSubmit}
          open={open}
          onClose={handleClose}
        />
      </Container>
    </ApolloProvider>
  );
};

export default RestaurantListWrapper;
