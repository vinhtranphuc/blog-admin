import { createStore, applyMiddleware } from "redux";
import categories from '../reducers/categories';
import thunk from 'redux-thunk';

export default () => {
    debugger;
    console.log('store/categories.js');
    return createStore(categories, applyMiddleware(thunk));
};