import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './javascript/serviceWorker';
import {createStore,combineReducers } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from "./reducer/RootReducer";
import usersReducer from "./reducer/UsersReaducer";

import App from "./App";

const store = createStore(combineReducers({
    rootReducer,
    usersReducer
}));
store.dispatch({
    type: 'toggleLogin',
});
console.log(store.getState())
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

/*
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><TestNode/></Provider>, document.getElementById('testNode'));
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
