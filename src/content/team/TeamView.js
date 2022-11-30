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
                        description: "Automating MX for F35s."
                    },
                    {
                        name: "F16 Finger Brace",
                        description: "Bracing fingers on F16s."
                    }
                ]}
            />
            <TeamCard
                unit="Not The 56th Fighter Wing"
                location="Hickam AFB, HI"
                emails={["bmswens@gmail.com", "otherguy@gmail.com"]}
                img="56FW.gif"
                projects={[
                    {
                        name: "Ipsum",
                        description: "Omnia Gaulia in tres partes dividia est"
                    }
                ]}
            />
        </Grid>
    )
}

export default TeamView