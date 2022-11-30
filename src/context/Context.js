// React
import React from 'react'

// custom
import ThemeContext from './ThemeContext'

function Context(props) {

    return (
        <ThemeContext>
            {props.children}
        </ThemeContext>
    )

}

export default Context