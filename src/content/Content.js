// React
import React from 'react'

// MUI
import {  Grid, Stack, Typography } from '@mui/material'

// custom
import TeamView from './team/TeamView'

function About(props) {

    return (
        <Grid
            container
            spacing={1}
            sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2
            }}
        >
            <Grid item xs={12}>
                <Typography variant="h3" align="center">
                    Our Mission
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                lg={6}
            >
                <Typography align="center">
                    Project Arc is a grass-roots effort
                    forging ahead on the 2030 Science and Technology (S&T) strategy and CSAF General Brown's
                    warning that we must 'Accelerate Change or Lose.'
                </Typography>
                <Typography align="center">
                    Each cohort is a 6-month program embedding innovative technical Airmen alongside
                    the warfighter. Those selected will work side-by-side with operators to provide tailored technical solutions
                    for operational problems unique to their unit. This collaborative relationship will allow hands-on
                    experimentation and prototyping while addressing operational problems before the conflict occurs.
                    During this collaboration, they will also grow the operational and tactical warfighter toolbox required
                    to achieve the vision laid out in the AF's 2030 S&T strategy.
                </Typography>
            </Grid>
        </Grid>
    )
}

function Content(props) {

    return (
        <Stack
            sx={{
                paddingLeft: "7px",
                paddingRight: "7px",
                marginTop: "7px"
            }}
        >
            <About />
            <TeamView />
        </Stack>
    )
}

export default Content