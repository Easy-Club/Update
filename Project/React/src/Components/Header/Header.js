import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
                <NavLink to="/Users" clicked>Users</NavLink>&nbsp;
                <NavLink to="/Enterprises" exact>Enterprises</NavLink>
        <div>צור קשר</div>
  
        </div>
    )
}
export default Header;