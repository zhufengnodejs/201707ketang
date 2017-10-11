import React,{Component} from 'react';
import HomeHeader from "./HomeHeader/index";
import './index.less'
import Carousel from "./Carousel/index";
export default class Home extends Component{
    render(){
        return (
            <div>
              <HomeHeader/>
              <div className="container">
                <Carousel/>
              </div>
            </div>
        )
    }
}