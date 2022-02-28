import React from 'react';

import classes from "./Button.module.css";

const Button = (props) => {
    const clname = `${classes.button} ${props.className}`

    return <button type={props.type} className={clname}>{props.children}</button>
}

export default Button;