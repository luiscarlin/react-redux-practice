import React from "react"
import { browserHistory } from "react-router"

// get params are passed in this.props.params
export class User extends React.Component {
    onNavigateHome() {
        browserHistory.push("/home")
    }

    render() {
        return (
            <div>
                <h3>User Page</h3>
                <p>User id: {this.props.params.id}</p>
                <button onClick={this.onNavigateHome}classname="btn btn-primary">Go Home!</button> 
            </div>
        );
    }
}