import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {AppBar, Badge, IconButton, Toolbar, Typography} from '@mui/material';
import {inject, observer} from "mobx-react";
import React from 'react';
import {Link} from "react-router-dom";

import {StoresNames} from "../../stores/StoreDictionary";

const Header = inject(StoresNames.BasketStoreName)(observer((props: any) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5"
          sx={{ flexGrow: 1 }}
          component={Link}
          to="/"
        >
          Pharmacy
        </Typography>
        <IconButton color="inherit"
          size="large"
          component={Link}
          to="/basket"
        >
          <Badge color="error"
            badgeContent={props.BasketStore.items.length}
          >
            <ShoppingCartIcon/>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}));

export default Header;
