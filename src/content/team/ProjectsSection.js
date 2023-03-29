// React
import React from 'react'

// MUI
import { Divider, Stack, Typography } from '@mui/material'

// MUI Icons
import ImageIcon from '@mui/icons-material/Image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkIcon from '@mui/icons-material/Link';

// custom
import LabeledIconButton from './LabeledIconButton';

function ProjectButtons(props) {

    const buttonMappings = [
        {
            label: "External Link",
            key: "external",
            icon: <LinkIcon fontSize="large" />
        },
        {
            label: "View Image",
            key: "image",
            icon: <ImageIcon fontSize="large" />
        },
        {
            label: "View Source",
            key: "source",
            icon: <GitHubIcon fontSize="large" />
        },
        {
            label: "Go To Application",
            key: "demo",
            icon: <LaunchIcon fontSize="large" />
        },
        {
            label: "View Video",
            key: "video",
            icon: <YouTubeIcon fontSize="large" />
        },
    ]
    
    return (
        <Stack
            spacing={1}
            direction="row"
            justifyContent="flex-end"
        >
            {buttonMappings.map(mapping => <LabeledIconButton label={mapping.label} url={props[mapping.key]} key={props.name + mapping.key}>{mapping.icon}</LabeledIconButton>)}
        </Stack>
    )
}


function ProjectInfo(props) {
    const {
        name,
        description
    } = props
    return (
        <>
            <Typography variant="h5">{name}</Typography>
            <Typography sx={{ml: 2}}>{description}</Typography>
            <ProjectButtons {...props} />
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