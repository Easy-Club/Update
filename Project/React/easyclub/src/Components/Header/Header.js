import React from 'react';
import { NavLink} from 'react-router-dom';
const Header = () => {
    
    return (
        <div>
                <NavLink to="/users">Users</NavLink>&nbsp;&nbsp;
                <NavLink to="/enterprises" exact>Enterprises</NavLink>&nbsp; צור קשר
              
  
        </div>
        //         <div>
        //             לוגו
        //             אידר משני
        // </div>
    )
}
export default Header;