// React
import React from 'react'

// MUI
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'

// custom
import TeamCard from './TeamCard'
import data from '../../data/data'

function TeamView(props) {

    const [cohort, setCohort] = React.useState("delta")

    let teamNames = data.getTeams(cohort)
    let teams = teamNames.map(name => data.getTeam(cohort, name))

    return (
        <Grid
            container
            spacing={1}
        >
            <Grid item xs={12}>
                <Typography variant="h3" align="center">
                    Our Teams
                </Typography>
            </Grid>
            <Grid 
                item 
                xs={12}
                sx={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <FormControl
                    sx={{
                        width: "256px"
                    }}
                >
                    <InputLabel id="cohort-label">Cohort</InputLabel>
                    <Select
                        labelId="cohort-label"
                        id="cohort-selection"
                        label="Cohort"
                        value={cohort}
                        onChange={event => setCohort(event.target.value)}
                    >
                        <MenuItem value="delta">Cohort Delta</MenuItem>
                        <MenuItem value="gamma" >Cohort Gamma</MenuItem>
                        <MenuItem value="beta" disabled >Cohort Beta</MenuItem>
                        <MenuItem value="alpha" disabled >Cohort Alpha</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {teams.map(team => <TeamCard {...team} key={team.unit} />)}
        </Grid>
    )
}

export default TeamView