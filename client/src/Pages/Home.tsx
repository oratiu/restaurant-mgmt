import React, { useState, useCallback } from 'react';
import RestaurantListWrapper from '../components/RestaurantListWrapper';
import SearchBar from '../components/SearchBar';
import { Box, Pagination } from '@mui/material';
import { useDebounce } from 'use-debounce';

const limit = 5;

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch] = useDebounce(searchTerm, 1000);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
    setPage(1); // Reset to first page on search
  }, []);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <RestaurantListWrapper
        searchTerm={debouncedSearch}
        page={page}
        limit={limit}
        onTotalCountChange={setTotalCount} // Pass down the handler for total count change
      />
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(totalCount / limit)} // Dynamically set based on total results
          page={page}
          onChange={handlePageChange}
          siblingCount={0}
          boundaryCount={1}
          showFirstButton
          showLastButton
        />
      </Box>
    </div>
  );
};

export default Home;
