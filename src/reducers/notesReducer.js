const notesInitialState = {
    isLoading: false,
    data: [],
    errors: {}
}

const notesReducer = (state = notesInitialState, action) => {
    switch (action.type) {
        case "LOADING_UPDATE" : {
            return {...state, isLoading: !state.isLoading}
        }

        case "REMOVE_DATA" : {
            return {...state, data: {}}
        }

        case "ADD_NOTES" : {
            return {...state, data: [action.payload, ...state.data]}
        }

        case "ADD_ALL_NOTES" : {
            return {...state, data: action.payload}
        }

        case "DELETE_NOTE" : {
            return {...state, data: state.data.filter(note => note._id !== action.payload)}
        }

        default : {
            return {...state}
        }
    }
}

export default notesReducer