import React,{Component} from 'react';
import './index.less'
import avatar from '../../images/profile.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
@connect(
  state=>state.session
)
export default class Profile extends Component{
    render(){
        return (
            <div className="profile">
                <img src={avatar}/>
              {
                this.props.user?<span>
                  {this.props.user.mobile}
                </span>:<span>
                  <Link to="/login">登录</Link>
                </span>
              }
            </div>
        )
    }
}