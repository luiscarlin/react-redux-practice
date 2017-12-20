import React from "react"
import PropTypes from 'prop-types'

// you can put a one-line JS statement in {}
// you can have code before return

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}. Your age is {this.props.age}.</p>
                <p>Your address is {this.props.user.address}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

// specify the types of props
// outside of the class
// specify all your props
// It's good practice
// This is optional
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
}
