// React
import React from 'react'

// MUI
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

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
                        sx={{ display: { xs: 'none', md: 'flex' }}}
                    >
                        Project Arc
                    </Typography>
                    <Box sx={{flexGrow: 1}} />
                    <Button
                        variant="contained"
                        href="https://usaf.dps.mil/teams/ProjectArc967?CT=1682364126715&OR=OWA-NT&CID=e8440631-dc0a-1d88-b0fc-0e6420833a08"
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
