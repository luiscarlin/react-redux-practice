import React from "react"
import {connect} from "react-redux"

import { User } from '../presenters/User'
import { Main } from '../presenters/Main'
import { setName } from '../actions/userActions'
import { setAge } from '../actions/userActions'

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={(name) => this.props.setName(name)} changeAge={(age) => this.props.setAge(age)}/>
                <User username={this.props.user.name} age={this.props.user.age}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.userReducer,
      math: state.mathReducer
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name))
        },
        setAge: (age) => {
            dispatch(setAge(age))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
