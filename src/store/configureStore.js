import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducers from "../reducers/userReducer";

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducers
    }), applyMiddleware(thunk))
    return store
}

export default configureStore