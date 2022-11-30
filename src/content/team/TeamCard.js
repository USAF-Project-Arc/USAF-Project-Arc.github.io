// React
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'
import ProjectsSection from './ProjectsSection'


function TeamCard(props) {
    let {
        img,
        unit,
        location,
        emails,
        projects
    } = props

    if (!projects) {
        projects = []
    }

    if (!emails) {
        emails = []
    }

    return (
        <Grid
            item
            xs={12}
            lg={6}
        >
            <Card
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <CardHeader
                    avatar={
                        <Box
                            component="img"
                            alt={`${unit} logo`} 
                            src={`/img/units/${img}`} 
                            sx={{ width: "64px", height: "64px"}} 
                        />
                    }
                    title={unit}
                    titleTypographyProps={{variant: "h4"}}
                    subheader={location}
                    subheaderTypographyProps={{variant: "h5"}}
                />
                <CardContent>
                    <ProjectsSection
                        projects={projects}
                    />
                </CardContent>
                <Box sx={{flexGrow: 1}} />
                <CardActions
                    sx={{ display: "flex"}}
                >
                    <Box sx={{flexGrow: 1}} />
                    <Button
                        variant="contained"
                        href={`mailto:${emails.join(';')}`}
                    >
                        Contact Us
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default TeamCard