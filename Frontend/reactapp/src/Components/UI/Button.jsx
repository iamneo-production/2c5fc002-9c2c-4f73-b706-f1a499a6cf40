import React from 'react';

import classes from "./Button.module.css";

const Button = (props) => {
    const clname = `${classes.button} ${props.className}`

    return <button className={clname}>{props.children}</button>
}

export default Button;