import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import React from 'react';

function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Аптека
          </Typography>
          <Button color="inherit">
            Корзина
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
