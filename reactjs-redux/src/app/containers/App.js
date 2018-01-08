import React from "react";

// Allows you to render a react component by mapping redux store state + dispatchers to components 
import {connect} from "react-redux";

// dumb (presentation) components
import { User } from '../presenters/User';
import { Main } from '../presenters/Main';

// no need to export this class. We oinly need to export the connect()
class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

// define which properties and actions you can use in your dumb components

// select which props from the global app state to map to the props of this component
// state is passed from redux
// note that props can also be functions. They are accessed through this.props
// state.userReducer.name will access the name props from the state used in the reducer
const mapStateToProps = (state) => {
  return {
      user: state.userReducer,
      math: state.mathReducer
  };
};

// specify what actions can be done in the dumb components
// the actions that are dispatch are then received by the reducers
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    };
};

// connects reactjs with redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
