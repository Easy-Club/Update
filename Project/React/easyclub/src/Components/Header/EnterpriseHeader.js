import React from 'react';
import { NavLink } from 'react-router-dom';
const EnterpriseHeader = () => {
    return (
        <div>
            <NavLink to='/enterprises/app'>app</NavLink>&nbsp;&nbsp;
            <NavLink to='/enterprises/reports'>reports</NavLink>&nbsp;&nbsp;
            <NavLink to='/enterprises/new'>new card</NavLink>&nbsp;&nbsp;
            <NavLink to='/enterprises/stores'>stores</NavLink>&nbsp;&nbsp;
            <NavLink to='/enterprises/update'>update</NavLink>
        </div>
    )
}
export default EnterpriseHeader;