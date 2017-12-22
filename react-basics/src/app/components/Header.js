import React from "react"

// this is a dumb, stateless component that takes inputs. Very simple.
export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// no need to render if this component directly to the site
// the component will be added in some other jsx file

// stateless components are better, more predictable, and more testable
