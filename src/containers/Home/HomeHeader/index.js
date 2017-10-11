import React, {Component} from 'react';
import logo from '../../../images/logo.png';
import './index.less'
import {CSSTransition,TransitionGroup} from 'react-transition-group';
export default class HomeHeader extends Component {
  constructor(){
    super();
    this.state = {showMenu:false};
  }
  render() {
    return (
      <div className="header">
        <img src={logo}/>
        <div onClick={()=>this.setState({showMenu:!this.state.showMenu})}>
        {
          this.state.showMenu?<i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-uilist"></i>
        }
          <TransitionGroup>
            {
              this.state.showMenu? <CSSTransition
                classNames="fade"
                timeout={500}
              ><ul className="menu-list">
                <li>Node课程培训</li>
                <li>HTML5课程培训</li>
                <li>视频课程</li>
                <li>文档课件</li>
              </ul></CSSTransition>:null
            }
          </TransitionGroup>
        </div>

      </div>
    )
  }
}