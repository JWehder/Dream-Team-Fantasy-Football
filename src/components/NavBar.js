import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css'

function NavBar({ handleClick, isLoggedIn }) {

    return (
        <div className="navBar">
            <NavLink
            to="/"
            exact
            className="navLink"
            activeStyle={{
            background: "darkred",
            }}
        >
            Home
        </NavLink>
        <NavLink
            to="/createteam"
            exact
            className="navLink"
            activeStyle={{
            background: "darkred",
            }}
        >
            Create Team
        </NavLink>
        <NavLink
            to="/myteam"
            exact
            className="navLink"
            activeStyle={{
            background: "darkred",
            }}
        >
            My Team
        </NavLink>

        {isLoggedIn ?
        <NavLink
            to="/login"
            exact
            className="navLink"
            onClick={handleClick}
            activeStyle={{
            background: "darkred",
            }}
        >
            Logout
        </NavLink>
        : ""
        }
        <NavLink
            to="/mycreatedteams"
            exact
            className="navLink"
            onClick={handleClick}
            activeStyle={{
            background: "darkred",
            }}
        >
            Logout
        </NavLink>
        
        </div>
    )
}

export default NavBar;