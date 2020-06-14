import React from 'react';
import { NavLink} from 'react-router-dom';
const UserHeader=()=>{
    return(
            <div>
                <NavLink to='/users/app' exact>application</NavLink>&nbsp;&nbsp;
                <NavLink to='/users/stores' exact>all stores</NavLink>&nbsp;&nbsp;
                <NavLink to='/users/new' exact>new card</NavLink>&nbsp;&nbsp;
                <NavLink to='/users/report' exact>report lost or stolen</NavLink>
                      </div>
    )
}
export default UserHeader;