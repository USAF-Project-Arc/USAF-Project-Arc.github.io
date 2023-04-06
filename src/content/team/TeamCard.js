// React
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'
import MemberSection from './MemberSection'
import ProjectsSection from './ProjectsSection'
import SimpleDialog from './SimpleDialog'

function TeamCard(props) {
    let {
        img,
        unit,
        location,
        emails,
        projects,
        members
    } = props

    if (!projects) {
        projects = []
    }

    if (!emails) {
        emails = []
    }

    if (!members) {
        members = []
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                        projects={projects.slice(0,3)}
                    />
                </CardContent>
                <Box sx={{flexGrow: 1}} />
                <CardActions
                    sx={{
                        display: "flex",
                        alignItems: "flex-end"
                    }}
                >
                    <MemberSection
                        members={members}
                    />
                    <Box sx={{flexGrow: 1}} />
                    <Button
                        size="large"
                        variant="contained"
                        style={{marginRight: 10}}
                        onClick={handleClickOpen}
                    >
                        See All Projects
                    </Button>
                    <Button
                        size="large"
                        variant="contained"
                        href={`mailto:${emails.join(';')}`}
                    >
                        Contact Us
                    </Button>
                    <SimpleDialog
                        unit={unit}
                        location={location}
                        img={img}
                        projects={projects}
                        open={open}
                        onClose={handleClose}
                    />
                </CardActions>
            </Card>
        </Grid>
    )
}


export default TeamCard