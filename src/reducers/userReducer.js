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

        case "LOADING_UPDATE" : {
            return {...state, isLoading: !state.isLoading}
        }

        case "ADD_USER_DETAILS" : {
            return {...state, data: action.payload}
        }

        case "REMOVE_DATA" : {
            return {...state, data: {}}
        }

        default : {
            return {...state}
        }
    }
}

export default userReducers