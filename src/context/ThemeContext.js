// React
import React from 'react'

// MUI
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function ThemeContext(props) {

    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}

export default ThemeContext