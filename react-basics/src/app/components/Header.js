import React from "react"

export class Header extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

// no need to render if this component directly to the site
// the component will be added in some other jsx file
