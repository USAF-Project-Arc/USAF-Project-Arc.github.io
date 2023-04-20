// React
import React, { useState } from 'react'

// MUI
import { AppBar, Box, Button, Toolbar, Typography, Link } from '@mui/material'

function TopNav(props) {

    // const navItems = ['About', 'Cohorts','Contact Us'];
    // const [selectedNav, setSelectedNav] = useState();

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
                    <Link
                        // component='typography'
                        color="inherit"
                        variant="h4"
                        sx={{ textDecoration: 'none', display: { xs: 'none', md: 'flex' }}}
                        href='/'
                        underline='none'
                        >
                            Project Arc
                    </Link>
                    <Box sx={{flexGrow: 1}} />
                    <Button
                        variant="contained"
                        disabled
                        sx={{
                            mr: 1
                        }}
                    >
                        Apply Now
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopNav