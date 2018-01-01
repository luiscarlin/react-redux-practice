import React from "react";
import { render } from "react-dom";
import registerServiceWorker from './registerServiceWorker';


import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";

class App extends React.Component {
    render() {
        return (
            <Root>
                <Home/>
                <User/>
            </Root>
        );
    }
}

render(<App />, window.document.getElementById('root'));
registerServiceWorker();
