import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {routerMiddleware} from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()
const routeWare = routerMiddleware(history)
let store = createStore(reducer,applyMiddleware(routeWare,thunk));
window.store = store;
export default store;