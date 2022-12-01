// React
import React from 'react'

// MUI
import { Grid } from '@mui/material'

// custom
import TeamCard from './TeamCard'

function TeamView(props) {

    return (
        <Grid
            container
            spacing={1}
        >
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