import React from "react"

// you can put a one-line JS statement in {}
// you can have code before return

export class Home extends React.Component {
    render() {
        let content = ""
        if (true) {
            content = <p>Hello!</p>
        }
        return (
            <div>
                <p>In a new component!</p>
                { content }
            </div>
        )
    }
}
