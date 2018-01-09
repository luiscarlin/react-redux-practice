const userReducer = (
  state = {
    name: "Max",
    age: 27,
  },
  action) => {
    switch (action.type) {
        // with promises, you need to create the fulfilled case for the action
        case "SET_NAME_FULFILLED":
            state = {
                ...state,
                name: action.payload
            }
            break;
        // with thunk, you don't need to create a fulfilled case for the action
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            }
            break
    }
    return state
}

export default userReducer