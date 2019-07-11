import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import categories from '../reducers/categories'

const rootReducers = combineReducers({
    categories
});

export default () => {
    return createStore(rootReducers, applyMiddleware(thunk));
};