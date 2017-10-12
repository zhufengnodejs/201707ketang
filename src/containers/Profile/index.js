import React,{Component} from 'react';
import './index.less'
import avatar from '../../images/profile.png';
export default class Profile extends Component{
    render(){
        return (
            <div className="profile">
                <img src={avatar}/>
                <span>登录</span>
            </div>
        )
    }
}