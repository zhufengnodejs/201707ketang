import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './index.less'
class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <i onClick={()=>this.props.history.goBack()} className="iconfont icon-fanhui"></i>
        <span>{this.props.title}</span>
      </div>
    )
  }
}
//给NavBar的属性对象上注入属性 history location match
export default withRouter(NavBar)