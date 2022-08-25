import { CssBaseline, ThemeProvider, Alert, Button, Stack } from '@mui/material'
import { appTheme } from "./themes/theme"

function App() {
  return (
    <ThemeProvider theme={appTheme}>
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
