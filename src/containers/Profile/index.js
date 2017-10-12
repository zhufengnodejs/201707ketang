import React,{Component} from 'react';
import './index.less'
import avatar from '../../images/profile.png';
import {Link} from 'react-router-dom';
export default class Profile extends Component{
    render(){
        return (
            <div className="profile">
                <img src={avatar}/>
                <span>
                  <Link to="/login">登录</Link>
                </span>
            </div>
        )
    }
}