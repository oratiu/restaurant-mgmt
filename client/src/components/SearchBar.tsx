import React from 'react';
import { TextField, Box } from '@mui/material';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <Box sx={{ mt: 4 }}>
      <TextField
        label="Search Restaurants"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default SearchBar;
