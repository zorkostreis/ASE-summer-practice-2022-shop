import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import React from 'react';

function Header() {
  return (
    <Box style={{ marginBottom: "1em" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Pharmacy
          </Typography>
          <Button color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
