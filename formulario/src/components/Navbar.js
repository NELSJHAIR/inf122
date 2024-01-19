import React from "react";
import {Link, Outlet} from "react-router-dom"
function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/">Registrar</Link>
                </li>
            </ul>
        </nav>
    <Outlet/>
    );
}
export default Navbar;