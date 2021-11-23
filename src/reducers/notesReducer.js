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

        case "EDIT_NOTE" : {
            return {...state, data: state.data.map(note => {
                if (note._id === action.payload._id) {
                    return {...note, ...action.payload}
                } else {
                    return {...note}
                }
            })}
        }

        default : {
            return {...state}
        }
    }
}

export default notesReducer