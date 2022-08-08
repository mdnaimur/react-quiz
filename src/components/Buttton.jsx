import React from 'react'
import classes from '../styles/Button.module.css'


export default function Buttton({ children }) {
    return (
        <div className={classes.button}>
            <span>{children}</span>
        </div>

    )
}
