import React from "react"
import { render }  from "react-dom"


class App extends React.Component {
    // called by react to render a component when needed
    render() {
        // return html. This is just for convenience.
        // React will use JS to implement the html.
        // can only return one root element (in this case a <div>)
        return (
            <div>
                <h1>Hello!</h1>
            </div>
        )
    }
}

// name of class and where to place it
render(<App/>, window.document.getElementById("app"))
