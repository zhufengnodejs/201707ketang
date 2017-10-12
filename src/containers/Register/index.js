import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
import avatar from '../../images/profile.png';
import NavBar from "../../components/NavBar/index";
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
@connect(
  state=>state.session,
  actions
)
export default class Register extends Component {
  handleClick = ()=>{
    let mobile = this.refs.mobile.value;
    let password = this.refs.password.value;
    this.props.register({mobile,password});
  }
  render() {
    return (
      <ul className="register">
        <li className="avatar">
            <img src={avatar}/>
        </li>
        <li><input ref="mobile" type="text" placeholder="手机号"/></li>
        <li><input ref="password" type="text" placeholder="密码"/></li>
        <li><Link to="/login">前往登录</Link></li>
        <li><button onClick={this.handleClick}>注&nbsp;册</button></li>
        <NavBar title ="注册"/>
      </ul>
    )
  }
}