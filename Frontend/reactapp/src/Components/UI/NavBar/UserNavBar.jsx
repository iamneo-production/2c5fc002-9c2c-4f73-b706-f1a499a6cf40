import React,{useState}  from 'react';

import classes from './NavBar.module.css';
import {Link} from 'react-router-dom'

const UserNavBar = (props) => {
    const [isHomeClicked,setIsHomeClicked] = useState(true);
    const [isCartClicked,setIsCartClicked] = useState(false);
    const [isOrdersClicked,setIsOrdersClicked] = useState(false);

    const homeClickHandler = () => {
        setIsHomeClicked(true);
        setIsCartClicked(false);
        setIsOrdersClicked(false);
    };

    const cartClickHandler = () => {
        setIsHomeClicked(false);
        setIsCartClicked(true);
        setIsOrdersClicked(false);
    };

    const ordersClickHandler = () => {
        setIsHomeClicked(false);
        setIsCartClicked(false);
        setIsOrdersClicked(true);
    };

    return(
        <nav className={classes.header} id={props.id}>
            <h1 className={classes.title}>AmazePack</h1>
            <div className={classes.navlinks}>
              <ul>
              <Link to='/'>
                  <li 
                    id='productHomeButton' 
                    onClick={homeClickHandler}
                    className={isHomeClicked? classes.clicked:""}
                  >
                    Home
                  </li></Link>
                  <Link to='/cart'><li 
                    id='productCartButton'
                    onClick={cartClickHandler}
                    className={isCartClicked? classes.clicked:""}
                  >
                    Cart
                  </li></Link>
                  <Link to='/myorders'><li 
                    id='productOrderButton'
                    onClick={ordersClickHandler}
                    className={isOrdersClicked? classes.clicked:""}    
                  >
                    My Orders
                  </li></Link>
              </ul>
            </div>
            <button id='logout' className={classes.logout}>Logout</button>
        </nav>
    )
}

export default UserNavBar;