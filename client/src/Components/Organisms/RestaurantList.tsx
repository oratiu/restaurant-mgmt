import React from 'react';
import { useQuery } from '@tanstack/react-query';
import apiClient from '../../api';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Box } from '@mui/material';

interface Restaurant {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const { data } = await apiClient.get<Restaurant[]>('/api/restaurants');
  return data;
};

const RestaurantList: React.FC = () => {
  const { data, error, isLoading } = useQuery<Restaurant[], Error>({
    queryKey: ['restaurants'],
    queryFn: fetchRestaurants,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching restaurants: {error.message}</div>;
  }

  const restaurants: Restaurant[] = Array.isArray(data) ? data : [];

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">
          Restaurants
        </Typography>
        {restaurants.length === 0 ? (
          <Typography component="p" variant="caption" color="text.secondary">No restaurants found</Typography>
        ) : (
          <Grid container spacing={4}>
            {restaurants.map((restaurant) => (
              <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt={restaurant.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {restaurant.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {restaurant.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {restaurant.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {restaurant.phone}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default RestaurantList;
