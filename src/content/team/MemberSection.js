// React
import React from 'react'

// MUI
import { Avatar, AvatarGroup, Tooltip, Typography } from '@mui/material'

function MemberTooltip(props) {
    const { name, role, afsc, unit, children } = props
    return (
        <Tooltip
            title={
                <>
                    <Typography fontSize="0.6785rem">{name}</Typography>
                    <Typography fontSize="0.6785rem">{role}</Typography>
                    <Typography fontSize="0.6785rem">{afsc}</Typography>
                    <Typography fontSize="0.6785rem">{unit}</Typography>
                </>
            }
        >
            {children}
        </Tooltip>
    ) 
}

function MemberAvatar(props) {
    const { member } = props

    function handleClick() {
        if (!member.url) {
            return
        }
        let newTab = window.open(member.url, '_blank')
        newTab.focus()
    }

    return (
        <MemberTooltip
            {...member}
        >
            <Avatar
                alt={member.name}
                src={`/img/members/${member.img}`}
                onClick={handleClick}
                sx={{
                    cursor: member.url ? "pointer" : "default",
                    width: 64,
                    height: 64
                }}
            />
        </MemberTooltip>
    )
}

function MemberSection(props) {
    let {
        members
    } = props

    if (!members) {
        members = []
    }

    return (
        <AvatarGroup max={5}>
            {members.map(member => <MemberAvatar member={member} key={member.name} />)}
        </AvatarGroup>
    )
}

export default MemberSection