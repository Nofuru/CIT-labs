import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./reducers/users";
import thunk from 'redux-thunk';

let reducers = combineReducers({
	users: usersReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
