import React from 'react';
import {Link} from "react-router-dom";
import './navbar.css'

const navbar = () =>{
    return(
        
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <h3 className='logo'> School Project </h3>

            <ul className='nav-links'>
                
            <Link to='/students'> <li>Students</li></Link>
            <Link to='/teachers'> <li>Teachers</li></Link>
            <Link to='/subjects'> <li>Subjects</li></Link>
            <Link to='/class'> <li>Classes</li></Link>
            </ul>
        </nav>
    )
}

export default navbar