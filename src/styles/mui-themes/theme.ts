import {createTheme} from "@mui/material/styles";

// declare module '@mui/material/styles' {
//   interface Theme {
//     palette: {
//       primary: {
//         main: string,
//       },
//       secondary: {
//         main: string,
//       }
//     }
//   }
// }

const theme = createTheme({
  palette: {
    primary: {
      main: '#79678a',
    },
    secondary: {
      main: '#edf2ff',
    }
  }
});

export default theme;
