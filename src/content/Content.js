// React
import React from 'react'

// MUI
import { Grid, Typography } from '@mui/material'

// Router
import { Route, Routes } from 'react-router-dom'


// custom
import TeamView from './team/TeamView'
import Home from './home/Home'

function ContentGrid(props) {
    return (
        <Grid
            container
            spacing={props.spacing ? props.spacing : 1}
            sx={{
                paddingLeft: "7px",
                paddingRight: "7px",
                marginTop: "7px",
                ...props.sx
            }}
        >
            {props.children}
        </Grid>
    )
}

function Content(props) {

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route
                path="/team"
                element={<TeamView />}
            />
        </Routes>
    )
}

export default Content
export {
    ContentGrid
}