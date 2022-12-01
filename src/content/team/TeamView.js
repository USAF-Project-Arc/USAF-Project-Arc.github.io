// React
import React from 'react'

// MUI
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'

// custom
import TeamCard from './TeamCard'

function TeamView(props) {

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
                        value="delta"
                    >
                        <MenuItem value="delta">Cohort Delta</MenuItem>
                        <MenuItem value="gamma" disabled >Cohort Gamma</MenuItem>
                        <MenuItem value="beta" disabled >Cohort Beta</MenuItem>
                        <MenuItem value="alpha" disabled >Cohort Alpha</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <TeamCard
                unit="56th Fighter Wing"
                location="Luke AFB, AZ"
                emails={["bmswens@gmail.com", "otherguy@gmail.com"]}
                img="56FW.gif"
                projects={[
                    {
                        name: "F35 MX Automation",
                        description: "Ideally these will be limited to one paragraph."
                    },
                    {
                        name: "F16 Finger Brace",
                        description: "Bracing fingers on F16s."
                    },
                    {
                        name: "This website",
                        description: "Stop, collaborate and listen."
                    }
                ]}
                members={[
                    {
                        name: "Brandon Swenson",
                        role: "Computer Scientist",
                        afsc: "1N371G",
                        unit: "34th IS",
                        url: "https://www.linkedin.com/in/bmswens/",
                        img: "swenson.jfif"
                    },
                    {
                        name: "Jordon Jones",
                        role: "Mechanical Engineer",
                        afsc: "2A773",
                        unit: "912nd ARS",
                        img: "jones.jpg"
                    }
                ]}
            />
            <TeamCard
                unit="A Totally Different Fighter Wing"
                location="Hickam AFB, HI"
                emails={["bmswens@gmail.com", "otherguy@gmail.com"]}
                img="56FW.gif"
                projects={[
                    {
                        name: "One Project",
                        description: "But it's a very important one project."
                    }
                ]}
            />
        </Grid>
    )
}

export default TeamView