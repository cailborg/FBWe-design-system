import { Alert, Button, Stack } from '@mui/material'
import CustomTheme from "./components/ThemeProvider/ThemeProvider"

function App() {
  return (
    <CustomTheme>
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
    </CustomTheme>
  )
}

export default App
