import React from "react"
import PropTypes from 'prop-types'

// you can put a one-line JS statement in {}
// you can have code before return

// this.props.children will render anything passed in the body of the component <Comp>body</Comp>
export class Home extends React.Component {
    constructor(props) {
        super()
        // use props only as inital values
        // state is the component's internal state
        // a change in the state means a redendering of the DOM
        this.state = {
            age: props.initialAge,
            status: "Active",
            homeLink: props.homeLink
        }
        console.log("constructor")
    }

    componentWillMount() {
        console.log("component will mount")
    }

    componentDidMount() {
        console.log("component did mount")
    }

    componentWillReceiveProps(nextProps) {
        console.log("component will receive props")
        console.log("nextProps=", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should component update")
        console.log("nextProps=", nextProps)
        console.log("nextState=", nextState)
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("component will update")
        console.log("nextProps=", nextProps)
        console.log("nextState=", nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component did update")
        console.log("nextProps=", prevProps)
        console.log("nextState=", prevState)
    }

    componentWillUnmount() {
        console.log("component will unmount")
    }

    onMakeOlder() {
        // noly the state values that you specify are modified
        this.setState({
            age: this.state.age + 1
        })
    }

    onChangeHomeLink(event) {
        this.setState({
            homeLink: event.target.value
        })
    }

    // when calling functions from html
    // 1. pass a reference to the function and bind this ==> onClick={this.onMakeOlder.bind(this)}
    // 2. Or use es6 => onClick={() => this.onMakeOlder()}
    // 3. If you want to update the UI, use state
    render() {
        console.log("rendering")
        return (
            <div>
                <p>Hello, {this.props.name}. Your age is {this.state.age}.</p>
                <p>Your address is {this.props.user.address}</p>
                <p>Status: {this.state.status}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                {this.props.children}
                <button onClick={() => this.onMakeOlder()} className='btn btn-primary'>Make me older</button>
                <hr/>
                <button onClick={() => this.props.call()} className='btn btn-primary'>Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onChangeHomeLink(event)}/>
                <button onClick={() => this.props.homeLinkUpdate(this.state.homeLink)} className='btn btn-primary'>Change home link</button>
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
    initialAge: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
    call: PropTypes.func
}
