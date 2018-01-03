import {render} from "react-dom";
import React from "react";
import {createStore} from "redux";

// reducer takes action and changes state
const reducer = (state, action) => {
    // find which action to perform
    // convention to use UPPERCASE action types
    switch (action.type) {
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBTRACT":
            state = state - action.payload;
            break;
    }
    // the new state the app will use
    return state;
};

// pass: reducer and initial app state (can be any type)
const store = createStore(reducer, 1);

// fire this callback when the store is updated
// for testing purposes (since we're not using react atm)
store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

// in this case, dispatch the action to the store, it knows to call the reducer
// store calls the reducer
// type of action and what changes in the state to perform. common to use "payload"
store.dispatch({
    type: "ADD",
    payload: 100
});
store.dispatch({
    type: "ADD",
    payload: 22
});
store.dispatch({
    type: "SUBTRACT",
    payload: 80
});
