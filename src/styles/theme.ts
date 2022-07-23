import "./fonts.scss";

import {createTheme} from "@mui/material/styles";
import colors from './colors.modules.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    info: {
      main: colors.info,
    },
  },
  typography: {
    fontFamily: 'Mulish',
    allVariants: {
      fontWeight: 300,
    },
    h4: {
      color: "inherit",
      textDecoration: "none",
      fontWeight: 500,
      fontSize: "xx-large"
    },
    h5: {
      color: colors.primaryDark,
      textDecoration: "none",
      fontWeight: 500,
    },
    h6: {
      fontWeight: 400,
      fontSize: "large",
      color: colors.primaryDark
    },
    body1: {
      fontSize: "medium",
      color: colors.cardSubstanceName
    },
    body2: {
      fontSize: "small",
      color: colors.cardSubstanceCode
    },
  },
});

export default theme;
