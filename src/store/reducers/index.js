import home from './home';
import session from './session';
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux';
export default combineReducers({
  home,
  session,
  router:routerReducer
})