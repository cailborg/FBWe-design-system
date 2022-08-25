import * as React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles';
import { appTheme } from "../../themes/theme"
import useMediaQuery from '@mui/material/useMediaQuery';

function CustomTheme(props: {
    children: JSX.Element|JSX.Element[];
}): JSX.Element {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(() => createTheme(appTheme(prefersDarkMode ? "dark" : "light")), [prefersDarkMode ? "dark" : "light"]);
    const { children } = props;
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}><CssBaseline enableColorScheme />{children}</ThemeProvider>
        </StyledEngineProvider>
    );
}

export default CustomTheme;