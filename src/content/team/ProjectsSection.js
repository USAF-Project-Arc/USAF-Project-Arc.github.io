// React
import React from 'react'

// MUI
import { Divider, Stack, Typography } from '@mui/material'

function ProjectInfo(props) {
    const {
        name,
        description
    } = props
    return (
        <>
            <Typography variant="h5">{name}</Typography>
            <Typography sx={{ml: 2}}>{description}</Typography>
        </>
    )
}

function ProjectsSection(props) {

    const { projects } = props

    return (
        <Stack
            divider={<Divider sx={{mt: 1, mb: 1}} />}
        >
            {projects.map(project => <ProjectInfo {...project} key={project.name} />)}
        </Stack>
    )

}

export default ProjectsSection