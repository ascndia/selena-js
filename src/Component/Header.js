import React from "react";
import "../App.css";

function Header(){
    return (
        <header className="Header">
            <span className="Title">
                S E L E N A
            </span>
            <ul className="Menu">
                <li><a href="#">A B O U T</a></li>
                <li><a href="#">S T O R Y</a></li>
                <li><a href="#">B U I L D</a></li>
            </ul>
        </header>
    )
}

export default Header;