import React, {Component} from 'react';
import './index.less'
export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="iconfont icon-fanhui"></i>
        <span>{this.props.title}</span>
      </div>
    )
  }
}