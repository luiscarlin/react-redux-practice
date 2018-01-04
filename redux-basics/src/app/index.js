import {render} from "react-dom";
import React from "react";
import {createStore} from "redux";

const initialState = {
    result: 1,
    lastValues: [],
    username: "Max"
}

// reducer takes action and changes state
// in es6, you can have default params
const reducer = (state = initialState, action) => {
    // find which action to perform
    // convention to use UPPERCASE action types
    switch (action.type) {
        case "ADD":
            // make a shallow copy off the top level (note this is NOT a deep copy)
            // then override values
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    // the new state the app will use
    return state;
};

// pass: reducer and initial app state (can be any type. object, int, arrays)
// if you provide a default for intial state in the reducer, you don't need to pass it
const store = createStore(reducer);

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
