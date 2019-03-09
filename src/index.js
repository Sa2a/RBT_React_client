import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './javascript/serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReduce from "./reducer/RootReducer";
import UsersPage from "./reactcomponents/users/UsersPage";
import Header from "./Header";

const store = createStore(rootReduce);
ReactDOM.render(<Provider store={store}><Header/></Provider>, document.getElementById('header'));

ReactDOM.render(<Provider store={store}><UsersPage/></Provider>, document.getElementById('root'));

/*
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><TestNode/></Provider>, document.getElementById('testNode'));
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
