import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import './index.css';
import App from './containers/App/app.js';
import * as serviceWorker from './serviceWorker';
import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import {watchAuth} from './store/sagas/';
import createSagaMiddleWare from 'redux-saga';
import history from './history.js';


// const rootReducer=combineReducers({
//     login:loginReducer,
//     home:homeReducer
// });

// const store= createStore(rootReducer);

const sagaMiddleWare= createSagaMiddleWare();

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(reducer,composeEnhancer(applyMiddleware(sagaMiddleWare)));
// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
sagaMiddleWare.run(watchAuth);//saga imported

ReactDOM.render(<Provider store={store}><Router history={history}><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
