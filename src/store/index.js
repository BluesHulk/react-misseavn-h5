
//redux-thunk
import { createStore ,applyMiddleware,compose } from 'redux';
// import {combineReducers} from 'redux-immutable';
import thunk from 'redux-thunk';
import reducer from './reducer';

//https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
        applyMiddleware(thunk),
);
const store = createStore(
    reducer,
    enhancer
);
export default store;


