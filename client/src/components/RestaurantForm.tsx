import React from 'react';
import { TextField, Button, Typography, Box, Modal } from '@mui/material';
import useRestaurantForm from '../hooks/useRestaurantForm.ts';

interface RestaurantFormProps {
  initialData?: Partial<Restaurant>;
  onSubmit: (data: Partial<Restaurant>) => void;
  open: boolean;
  onClose: () => void;
}

interface Restaurant {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const RestaurantForm: React.FC<RestaurantFormProps> = ({
  initialData = {},
  onSubmit,
  open,
  onClose,
}) => {
  const { formData, isFormValid, handleChange } =
    useRestaurantForm(initialData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit(formData);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          {initialData.id ? 'Edit Restaurant' : 'Add New Restaurant'}
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address || ''}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            fullWidth
            type="email"
            required
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={!isFormValid}
          >
            {initialData.id ? 'Save Changes' : 'Add Restaurant'}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default RestaurantForm;
