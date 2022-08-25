import { blue, pink } from "@mui/material/colors";

export const appTheme = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: blue,
            divider: blue[200],
            text: {
              primary: pink[900],
              secondary: pink[800],
            },
          }
        : {
            // palette values for dark mode
            primary: blue,
            divider: blue[700],
            background: {
              default: blue[900],
              paper: blue[900],
            },
            text: {
              primary: '#fff',
              secondary: blue[500],
            },
          }),
    },
  });