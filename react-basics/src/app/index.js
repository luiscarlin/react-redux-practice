import React from "react"
import { render }  from "react-dom"

// import other components to render them here

import { Header } from "./components/Header"
import { Home } from "./components/Home"


class App extends React.Component {
    constructor()  {
        super()
        this.state = {
            homeLink: "Home"
        }
    }

    callFromChild() {
        alert("Hello, traveller")
    }

    changeHomeLink(linkName) {
        this.setState({
            homeLink: linkName
        })
    }

    // called by react to render a component when needed
    render() {
        let user = {
            "address": "123 Main st",
            "dob": "11/11/2000",
            "gender": "male",
            "hobbies": ["soccer", "guitar", "programming"]
        }
        // return html. This is just for convenience.
        // React will use JS to implement the html.
        // can only return one root element (in this case a <div>)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                            name={"Luis"}
                            initialAge={33}
                            user={user}
                            homeLinkUpdate={this.changeHomeLink.bind(this)}
                            homeLink={this.state.homeLink}
                            call={this.callFromChild}>
                            <p>This is the body</p>
                        </Home>
                    </div>
                </div>
            </div>
        )
    }
}

// name of class and where to place it
render(<App/>, window.document.getElementById("app"))
