import * as React from 'react';
import { CssBaseline, ThemeProvider, Alert, Button, Stack } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from "@mui/material/styles";
import { appTheme } from "./themes/theme"

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => createTheme(appTheme(prefersDarkMode ? "dark": "light")), [prefersDarkMode ? "dark": "light"]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div className="App">
      <Stack gap={4}>
        <Alert severity="warning">This is a warning alert</Alert>
        <Alert severity="info">This is a warning alert</Alert>
        <Stack direction="row" gap={4}>
        <Button color="primary" variant="contained">Primary Button</Button>
        <Button color="secondary" variant="contained">Secondary Button</Button>
        </Stack>
        </Stack>
      </div>
    </ThemeProvider>
  )
}

export default App
