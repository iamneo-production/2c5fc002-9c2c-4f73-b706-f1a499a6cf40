import React,{useState,Fragment}  from 'react';

import classes from './NavBar.module.css';
import {NavLink} from 'react-router-dom'

const UserNavBar = (props) => {
    return(
      <Fragment>
        <nav className={classes.header} id={props.id}>
            <h1 className={classes.title}>AmazePack</h1>
            <div className={classes.navlinks}>
              <ul>
              <NavLink to='/'>
                  <li 
                    id='productHomeButton' 
                    // className={isActive? classes.clicked:""}
                  >
                    Home
                  </li></NavLink>
                  <NavLink to='/cart'><li 
                    id='productCartButton'
                    // className={isActive? classes.clicked:""}
                  >
                    Cart
                  </li></NavLink>
                  <NavLink to='/myorders'><li 
                    id='productOrderButton'
                    // className={isActive? classes.clicked:""}    
                  >
                    My Orders
                  </li></NavLink>
              </ul>
            </div>
            <button id='logout' className={classes.logout}>Logout</button>
        </nav>
      </Fragment>
    )
}

export default UserNavBar;