import "./Navbar.css"

import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <nav className="navbar">
            <h2>SokoSmart</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/logout">Logout</Link>
        </nav>
    );
}