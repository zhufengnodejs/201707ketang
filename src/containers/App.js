import React, {Component} from 'react';
import '../style/common.less'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from "./Home/index";
import Lesson from "./Lesson/index";
import Profile from "./Profile/index";
import Tab from "../components/Tab/index";
import Detail from "./Detail/index";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/lesson" component={Lesson}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/detail" component={Detail}/>
          </Switch>
          <Tab/>
        </div>
      </Router>
    )
  }
}