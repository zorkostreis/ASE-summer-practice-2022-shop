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
    allVariants: {
      fontWeight: 300,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 400,
      fontSize: "large",
      color: colors.cardName
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
