import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Restaurant } from '../types';

interface RestaurantListProps {
  restaurants: Restaurant[];
  handleOpen: (restaurant?: Partial<Restaurant>) => void;
  handleDelete: (id: number) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  handleOpen,
  handleDelete,
}) => {
  return (
    <Grid container spacing={4}>
      {restaurants.map((restaurant) => (
        <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
          <Card
            sx={{
              position: 'relative',
              '&:hover .actions': { display: 'flex' },
            }}
          >
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
            <Box
              className="actions"
              sx={{
                display: 'none',
                position: 'absolute',
                top: 8,
                right: 8,
                flexDirection: 'column',
              }}
            >
              <IconButton
                color="primary"
                onClick={() => handleOpen(restaurant)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="secondary"
                onClick={() => handleDelete(restaurant.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          onClick={() => handleOpen()}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <AddIcon fontSize="large" />
        </Card>
      </Grid>
    </Grid>
  );
};

export default RestaurantList;
