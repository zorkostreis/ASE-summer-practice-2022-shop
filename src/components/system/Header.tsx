import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {AppBar, Badge, IconButton, Toolbar, Typography} from '@mui/material';
import {inject, observer} from "mobx-react";
import React from 'react';
import {Link} from "react-router-dom";

import {StoresNames} from "../../stores/StoreDictionary";

const Header = inject(StoresNames.CartStoreName)(observer((props: any) => {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4"
          component={Link}
          to="/"
        >
          Pharmacy
        </Typography>
        <IconButton color="inherit"
          size="large"
          component={Link}
          to="/cart"
        >
          <Badge color="error"
            badgeContent={props.CartStore.getTotalAmount()}
          >
            <ShoppingCartIcon/>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}));

export default Header;
