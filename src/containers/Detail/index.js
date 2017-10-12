import React,{Component} from 'react';
import './index.less';
import NavBar from "../../components/NavBar/index";
export default class Detail extends Component{
    render(){
      let {name,url,price} = this.props.location.state?this.props.location.state.lesson:{};
        return (
            <div className="lesson-detail">
              <img src={url}/>
              <h4>{name}</h4>
              <p>{price}</p>
              <NavBar title ="课程详情"/>
            </div>
        )
    }
}