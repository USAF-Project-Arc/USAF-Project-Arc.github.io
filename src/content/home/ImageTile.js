// React
import React from 'react'

// MUI
import { Box, Card, CardMedia, Stack, Typography } from '@mui/material'

// react router dom
import { Link } from 'react-router-dom/dist'

function TitleText(props) {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 15,
                left: "50%",
                transform: "translate(-50%, 0)",
                width: '80%',
                color: 'white',
                padding: '10px',
            }}
        >
            <Typography variant="h3" align="center">{props.children}</Typography>
        </Box>
    )
}

function BottomBox(props) {
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: 10,
                left: "50%",
                transform: "translate(-50%, 0)",
                width: '80%',
                bgcolor: 'rgba(0, 0, 0, 0.54)',
                color: 'white',
                padding: '10px',
                border: 1,
                borderRadius: 7,
                borderColor: "white"
            }}
        >
            <Typography align="center">{props.children}</Typography>
        </Box>
    )
}


function ImageTile(props) {
    const {
        width,
        path,
        src,
        topText,
        bottomText
    } = props

    return (
        <Link to={path}>
            <Card
                sx={{
                    width: width ? width : "100%",
                    border: 3,
                    borderStyle: "solid",
                    borderRadius: 7,
                    borderColor: "white"
                }}
            >
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        image={src}
                    />
                    <TitleText>
                        {topText}
                    </TitleText>
                    <BottomBox>
                        {bottomText}
                    </BottomBox>
                </Box>
            </Card>
        </Link>
    )
}

export default ImageTile