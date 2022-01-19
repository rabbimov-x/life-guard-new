import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, compose,   createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/rootReducer';
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import thunk from 'redux-thunk';
import './css/main.scss'
//thunk umumiy qilib ulab qoyish meddleWare meddl- oraliq Ware - narsa oraliqNarsa  Actiondan reduserga chaqirilgan funksiyalarni chaqirib qoyish
 const store = createStore(rootReducer ,compose(applyMiddleware(thunk)  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
  

ReactDOM.render(
<Provider store = {store}>
    <App /> 
</Provider>,
  document.getElementById('root')
);

