import React from 'react'
import classes from '../styles/Button.module.css'


export default function Buttton({ className, children }) {
    return (
        <div className={`${classes.button} ${className}`}>
            {children}
        </div>

    )
}
