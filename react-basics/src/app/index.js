import React from "react"
import { render }  from "react-dom"

// import other components to render them here

import { Header } from "./components/Header"
import { Home } from "./components/Home"


class App extends React.Component {
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
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Luis"} age={33} user={user}>
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
