// React
import React from 'react'

// MUI
import { Box } from '@mui/material'

// custom
import TeamView from './team/TeamView'

function Content(props) {

    return (
        <Box
            sx={{
                paddingLeft: "7px",
                paddingRight: "7px",
                marginTop: "7px"
            }}
        >
           <TeamView />
        </Box>
    )
}

export default Content