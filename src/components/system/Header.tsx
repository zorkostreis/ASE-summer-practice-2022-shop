import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {AppBar, Badge, IconButton, Toolbar, Typography} from '@mui/material';
import {inject, observer} from "mobx-react";
import React from 'react';
import {Link} from "react-router-dom";

import {StoresNames} from "../../stores/StoreDictionary";

const Header = inject(StoresNames.CartStore, StoresNames.AppStore)(observer((props: any) => {
  const totalAmount = props.CartStore.getTotalAmount();

  return (
    <AppBar position="static">
      <Toolbar className="d-flex justify-content-between">
        <Typography variant="h4"
          component={Link}
          to="/"
        >
          Pharmacy
        </Typography>
        <div>
          <IconButton color="inherit"
            size="large"
            component={Link}
            to="/cart"
          >
            <Badge color="error"
              badgeContent={totalAmount}
            >
              <ShoppingCartIcon/>
            </Badge>
          </IconButton>
          <IconButton color="inherit"
            size="large"
            onClick={() => props.AppStore.logOut()}
          >
            <LogoutIcon/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}));

export default Header;
