import React, {Component} from 'react';
import logo from '../../../images/logo.png';
import './index.less'
export default class HomeHeader extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo}/>
        <div>
          <i className="iconfont icon-uilist"></i>
          <i className="iconfont icon-guanbi"></i>
        </div>
        <ul className="menu-list">
          <li>Node课程培训</li>
          <li>HTML5课程培训</li>
          <li>视频课程</li>
          <li>文档课件</li>
        </ul>
      </div>
    )
  }
}