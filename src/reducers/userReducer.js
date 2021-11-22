const userInitialState = {
    isLoading: false,
    data: {},
    errors: {}
}

const userReducers = (state = userInitialState, action) => {
    switch (action.type) {
        case "ADD_USER_ERRORS" : {
            return {...state, errors: action.payload}
        }

        case "CLEAR_USER_ERRORS" : {
            return {...state, errors: {}}
        }

        default : {
            return {...state}
        }
    }
}

export default userReducers