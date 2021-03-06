import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer/index';
import thunk from 'redux-thunk';
import {Provider} from'react-redux';
import {BrowserRouter} from 'react-router-dom';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,{},composeEnhancers(applyMiddleware(thunk))); // redux enhance for inspect dev tool
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));


