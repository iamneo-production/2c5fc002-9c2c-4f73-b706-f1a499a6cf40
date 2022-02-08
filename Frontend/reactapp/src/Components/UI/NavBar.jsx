import React  from 'react';

import classes from './NavBar.module.css';

const NavBar = (props) => {

    const navlinks = props.navlinks.map((navlink) => {
        return <li key={navlink.id} id={navlink.id}>{navlink.name}</li>;
    })
    
    return(
        <nav className={classes.header} id={props.id}>
            <h1 className={classes.title}>AmazePack</h1>
            <div className={classes.navlinks}>
              <ul>{navlinks}</ul>
            </div>
            <button id='logout' className={classes.logout}>Logout</button>
        </nav>
    )
}

export default NavBar;