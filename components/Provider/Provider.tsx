'use client';

import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import themeOptions from "@/config/theme";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
})

export function Provider({ children } : {children: React.ReactNode}) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const [themeMode, setThemeMode] = React.useState<'light' | 'dark' | null>(null)

    const primary_color = themeMode == null
        ? prefersDarkMode
            ? '#ed89a3'
            : '#7a003c'
        : themeMode == 'light'
            ? '#7a003c'
            : '#ed89a3';

    const secondary_color = themeMode == null
        ? prefersDarkMode
            ? '#fdd287'
            : '#fdbf57'
        : themeMode == 'light'
            ? '#fdbf57'
            : '#fdd287';

    const theme = React.useMemo(
        () =>
            createTheme({
                ...themeOptions,
                palette: {
                    mode:
                        themeMode == null
                            ? prefersDarkMode
                                ? 'dark'
                                : 'light'
                            : themeMode,
                    primary: {
                        main: primary_color
                    },
                    secondary: {
                        main: secondary_color
                    },
                },
                components: {
                    ...themeOptions.components,
                    MuiButtonBase: {
                        styleOverrides: {
                            root: {
                                "&:focus-visible": {
                                    outline: `2px solid ${primary_color}`,
                                },
                            },
                        },
                    }
                }
            }),
        [themeMode, prefersDarkMode]
    )

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setThemeMode(prevMode => (prevMode == null ? (theme.palette.mode === 'dark' ? 'light' : 'dark') : prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        [theme]
    )

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}