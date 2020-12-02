import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {
    composeWithDevTools
} from "redux-devtools-extension";
import * as home from './home/reducer';
import * as production from './production/reducer';
import {IS_DEVELOPMENT} from "../config";

const middleware = IS_DEVELOPMENT?
    composeWithDevTools(applyMiddleware(thunk)):applyMiddleware(thunk);

let store = createStore(
    combineReducers({...production,...home}),
    middleware
);
export default store;