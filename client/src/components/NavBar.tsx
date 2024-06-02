import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import LogoutIcon from '@mui/icons-material/Logout';
import authStore from '../stores/AuthStore';

const NavBar: React.FC = () => {
  const location = useLocation();

  const getCurrentTab = () => {
    switch (location.pathname) {
      case '/':
        return 0;
      case '/login':
        return 1;
      default:
        return 0;
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    authStore.logout();
  };

  return (
    <AppBar color={'transparent'} position="sticky">
      <Toolbar>
        <Tabs value={getCurrentTab()}>
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Login" component={Link} to="/login" />
        </Tabs>
        <Typography sx={{ flexGrow: 1 }} />
        {authStore.currentUser && (
          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              {authStore.currentUser.email}
            </Typography>
            <LogoutIcon
              onClick={handleLogout}
              sx={{
                cursor: 'pointer',
                transition: 'color 0.5s',
                '&:hover': {
                  color: 'red',
                },
              }}
            />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default observer(NavBar);
