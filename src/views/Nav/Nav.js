import React from "react";
import './Nav.scss'
import { NavLink, Link } from "react-router-dom";


class Nav extends React.Component {
    render() {
        return (
            <>
                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact="true">Home </NavLink>
                    <NavLink to="/todo" activeClassName="active">Todo</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/user" activeClassName="active">User</NavLink>

                </div>
                <p>
                    Simple to do app with Reverie
                </p></>


        )
    }
}

export default Nav