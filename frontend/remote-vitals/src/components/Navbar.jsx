import React from 'react'
import { NavLink } from 'react-router-dom'
import health from '../assets/health.png'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <NavLink className='nav-brand' to={'/'}>
                    <img src={health} alt="Remote Vitals" />
                    <span>Remote Vitals</span>
                </NavLink>
                <div>
                 <NavLink to= {'/home'}>Home</NavLink> 
                </div>
            </div>  
        </nav>
    )
}

export default Navbar