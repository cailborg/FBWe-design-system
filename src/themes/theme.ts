import { PaletteMode } from '@mui/material';
import * as theme from './theme.json';

export const appTheme = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? theme.light
        : theme.dark),
    },
  });