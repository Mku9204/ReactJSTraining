import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul style={
            {
                display: "flex",
                gap: "20px",
                cursor: 'pointer'
            }
        }>
            <Link to='/'> <li style={{ listStyle: 'none', }}>Home</li></Link>
            <Link to='/about'> <li style={{ listStyle: 'none', }}>About</li></Link>
            <Link to='/contact'> <li style={{ listStyle: 'none', }}>Contact</li></Link>

        </ul>
    )
}
export default Navbar;