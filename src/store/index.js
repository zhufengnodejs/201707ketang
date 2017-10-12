import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
const middleware = routerMiddleware(history)
let store = createStore(reducer,applyMiddleware(thunk,middleware));
export default store;