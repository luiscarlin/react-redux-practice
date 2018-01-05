import {render} from "react-dom";
import React from "react";
import {createStore, combineReducers, applyMiddleware} from "redux";

// reducer takes action and changes state
// in es6, you can have default params
const mathReducer = (state = {
    result: 1,
    lastValues: [],
  },
  action) => {
    // find which action to perform
    // convention to use UPPERCASE action types
    // we need to make sure that the state is immutable (different memory locations)
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

const userReducer = (
  state = {
    name: "Max",
    age: 27,
  },
  action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            }
            break;
    }
    // the new state the app will use
    return state;
};

// this middleware gets executed before the reducer is called with the action
// we need to make sure you call the action next
const middlewareLogger = (store) => (next) => (action) => {
    console.log("Redux middleware (before reducer):", action)
    next(action)
}

// pass: reducer and initial app state (can be any type. object, int, arrays)
// if you provide a default for intial state in the reducer, you don't need to pass it
// use combineReducers when using more than one reducer
// in es6 => {hello: hello} = {hello}
const store = createStore(
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(middlewareLogger)
)

// fire this callback when the store is updated
// for testing purposes (since we're not using react atm)
// store.getState() returns a global state (each reducer has a different state)
store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

// in this case, dispatch the action to the store, it knows to call the reducer
// store calls the reducer
// type of action and what changes in the state to perform. common to use "payload"
// actions have to be unique for the whole app
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
store.dispatch({
    type: "SET_AGE",
    payload: 33
})
store.dispatch({
    type: "SET_NAME",
    payload: "luis"
})
