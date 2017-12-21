import React from "react"
import PropTypes from 'prop-types'

// you can put a one-line JS statement in {}
// you can have code before return

// this.props.children will render anything passed in the body of the component <Comp>body</Comp>
export class Home extends React.Component {
    constructor(props) {
        super()
        this.age = props.age
    }

    onMakeOlder() {
        this.age += 1
        console.log(this.age)
    }

    // when calling functions from html
    // 1. pass a reference to the function and bind this ==> onClick={this.onMakeOlder.bind(this)}
    // 2. Or use es6 => onClick={() => this.onMakeOlder()}
    // 3. If you want to update the UI, use state
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}. Your age is {this.age}.</p>
                <p>Your address is {this.props.user.address}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                {this.props.children}
                <button onClick={() => this.onMakeOlder()} className='btn btn-primary'>Make me older</button>
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
    user: PropTypes.object,
    children: PropTypes.element.isRequired
}
