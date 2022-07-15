import "./fonts.scss";

import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#79678a',
    },
  },
  typography: {
    fontFamily: [
      'Mulish'
    ].join(','),
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 400,
      fontSize: "large",
      color: '#3a3342'
    },
    body1: {
      fontWeight: 300,
      fontSize: "medium",
      color: '#48454b'
    },
    body2: {
      fontWeight: 300,
      fontSize: "small",
      color: '#79787a'
    },
    button: {
      fontWeight: 300,
    }
  },
});

export default theme;
