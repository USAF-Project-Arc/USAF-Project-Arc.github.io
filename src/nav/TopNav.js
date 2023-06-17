// React
import React from 'react'

// MUI
import { AppBar, Box, Button, Toolbar, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'


function TopNav(props) {

    const theme = useTheme()

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
                    <Link to="/">
                        <Button
                            sx={{
                                color: theme.palette.text.primary
                            }}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button
                            sx={{
                                color: theme.palette.text.primary
                            }}
                        >
                            Mission
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button
                            sx={{
                                color: theme.palette.text.primary
                            }}
                        >
                            Projects
                        </Button>
                    </Link>
                    <Link to="/team">
                        <Button
                            sx={{
                                color: theme.palette.text.primary
                            }}
                        >
                            Team
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button
                            sx={{
                                color: theme.palette.text.primary
                            }}
                        >
                            Luminaries
                        </Button>
                    </Link>
                    <Box sx={{flexGrow: 1}} />
                    <Button
                        variant="contained"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdt6kJDBJmKL4Ee5w0YRCK_vpwWzUzhuNijrOPWAlPDywHC0Q/viewform"
                        target="_blank"
                        sx={{
                            mr: 1
                        }}
                    >
                        Apply Now
                    </Button>
                    <Button
                        variant="contained"
                        href="mailto:projectarc@us.af.mil"
                    >
                        Contact Us
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopNav
