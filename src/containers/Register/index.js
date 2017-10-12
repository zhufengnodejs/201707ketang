import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
import avatar from '../../images/profile.png';
import NavBar from "../../components/NavBar/index";
export default class Register extends Component {
  render() {
    return (
      <ul className="register">
        <li className="avatar">
            <img src={avatar}/>
        </li>
        <li><input type="text" placeholder="手机号"/></li>
        <li><input type="text" placeholder="密码"/></li>
        <li><Link to="/login">前往登录</Link></li>
        <li><button>注&nbsp;册</button></li>
        <NavBar title ="注册"/>
      </ul>
    )
  }
}