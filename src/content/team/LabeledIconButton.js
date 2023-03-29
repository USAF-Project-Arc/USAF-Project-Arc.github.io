// React
import React from 'react'

// MUI
import { IconButton, Tooltip } from '@mui/material'

function LabeledIconButton(props) {
    const { 
        label,
        url
    } = props

    if (!url) {
        return null
    }
    return (
        <Tooltip
            title={label}
        >
            <a href={url} target="_blank" rel="noreferrer">
                <IconButton
                    aria-label={label}
                >
                    {props.children}
                </IconButton>
            </a>
        </Tooltip>
    )
}

export default LabeledIconButton