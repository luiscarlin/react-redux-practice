import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxLogger from "redux-logger"
import promise from "redux-promise-middleware"
import thunk from "redux-thunk"

import mathReducer from './reducers/mathReducer'
import userReducer from './reducers/userReducer'

export default createStore(
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(reduxLogger(), thunk, promise())
)