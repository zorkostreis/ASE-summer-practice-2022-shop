import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import React from 'react';
import {Link} from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Pharmacy
        </Typography>
        <Button color="inherit"
          component={Link}
          to="/basket"
        >
            Basket
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
