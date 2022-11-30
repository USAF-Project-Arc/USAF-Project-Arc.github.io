// React
import React from 'react'

// MUI
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

function TopNav(props) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
            >
                <Toolbar>
                    <Box
                        component="img"
                        src="/img/logo.png"
                        alt="Project Arc Logo"
                        sx={{
                            height: 42,
                            width: 42,
                            mr: 1
                        }}
                    />
                    <Typography
                        variant="h4"
                    >
                        Project Arc
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopNav