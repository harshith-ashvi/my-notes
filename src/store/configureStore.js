import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import notesReducer from "../reducers/notesReducer";
import userReducers from "../reducers/userReducer";

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducers,
        notes: notesReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore