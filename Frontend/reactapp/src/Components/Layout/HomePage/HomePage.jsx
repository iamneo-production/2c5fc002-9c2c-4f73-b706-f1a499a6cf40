import React,{Fragment} from 'react';
import { Outlet} from 'react-router-dom'

import UserNavbar from '../../UI/NavBar/UserNavBar';


function HomePage(props){
    return(
        <Fragment>
            <UserNavbar id={props.id} />
            <Outlet />
        </Fragment>
    )
}

export default HomePage;