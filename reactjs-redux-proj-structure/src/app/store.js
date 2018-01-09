import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxLogger from "redux-logger"

import mathReducer from './reducers/mathReducer'
import userReducer from './reducers/userReducer'

export default createStore(
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(reduxLogger())
)