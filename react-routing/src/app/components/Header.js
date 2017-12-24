import React from "react"
import  { Link } from "react-router"

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/user/10"} className="nav-link">User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};