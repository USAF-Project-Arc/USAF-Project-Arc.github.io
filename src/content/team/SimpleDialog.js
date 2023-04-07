// React
import { Box, CardHeader, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material'
import React from 'react'
import ProjectsSection from './ProjectsSection'
import CloseIcon from '@mui/icons-material/Close';

function SimpleDialog(props) {
    let {
        onClose,
        open,
        unit,
        img,
        location,
        projects
    } = props

    if (!projects) {
        projects = []
    }

    const handleClose = () => {
        onClose(projects);
    };

    return (
        <Dialog maxWidth={"md"} onClose={handleClose} open={open}>
        <DialogTitle>
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
            {onClose ? (
                <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
        <DialogContent>
            <ProjectsSection projects={projects}/>
        </DialogContent>
        </Dialog>
    );
}

export default SimpleDialog