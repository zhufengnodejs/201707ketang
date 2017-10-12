import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
import avatar from '../../images/profile.png';
import NavBar from "../../components/NavBar/index";
export default class Login extends Component {
  render() {
    return (
      <ul className="login">
        <li className="avatar">
            <img src={avatar}/>
        </li>
        <li><input type="text" placeholder="手机号"/></li>
        <li><input type="text" placeholder="密码"/></li>
        <li><Link to="/register">前往注册</Link></li>
        <li><button>登&nbsp;录</button></li>
        <NavBar title ="登录"/>
      </ul>
    )
  }
}