import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";


// path will be appended to localhost:8080/
// by default, urls are done as => example.com/#/user
// antoher option is to use: example.com/user
// use browserHistory to get rid of the #
// you also need to configure webpack-dev-server to handle this style of urls
// root accepts other components as children (this.props.children) and will display them
// IndexRoute will load the page /home on / as default route
class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root} >
                    <IndexRoute component={Home} />
                    <Route path={"user"} component={User} />
                    <Route path={"home"} component={Home} />
                </Route>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById('app'));
