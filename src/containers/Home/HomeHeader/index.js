import React, {Component} from 'react';
import logo from '../../../images/logo.png';
import './index.less'
export default class HomeHeader extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo}/>
        <div>
          <i className="iconfont icon-ulist"></i>
          <i className="iconfont icon-guanbi"></i>
        </div>
      </div>
    )
  }
}