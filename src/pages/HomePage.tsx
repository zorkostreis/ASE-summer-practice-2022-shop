import {Button, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

// здесь могла бы быть ваша homepage

function HomePage() {
  return (
    <Button variant="outlined"
      component={Link}
      to="/catalog"
    >
      <Typography>
        Перейти в каталог
      </Typography>
    </Button>
  );
}

export default HomePage;
