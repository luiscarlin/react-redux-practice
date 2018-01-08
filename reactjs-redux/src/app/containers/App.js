import React from "react";

// Allows you to render a react component by mapping redux store state + dispatchers to components 
import {connect} from "react-redux";

// dumb (presentation) components
import { User } from '../presenters/User';
import { Main } from '../presenters/Main';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

// state coming from 
const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
