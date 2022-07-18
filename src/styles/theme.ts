import "./fonts.scss";

import {createTheme} from "@mui/material/styles";
import colors from './colors.modules.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
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
      color: colors.cardName
    },
    body1: {
      fontWeight: 300,
      fontSize: "medium",
      color: colors.cardSubstanceName
    },
    body2: {
      fontWeight: 300,
      fontSize: "small",
      color: colors.cardSubstanceCode
    },
    button: {
      fontWeight: 300,
    }
  },
});

export default theme;
