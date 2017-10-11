import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/index";
import './index.less'
import Carousel from "./Carousel/index";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import LessonList from "./LessonList/index";
import {downRefresh} from '../../utils';
@connect(
  state => state.home,
  actions
)
export default class Home extends Component {
  componentWillMount(){
    if(this.props.sliders.length == 0){
      this.props.fetchSliders();
      this.props.fetchLessons();
    }
  }
  componentDidMount(){
    let container = this.refs.container;
    downRefresh(container,this.props.refreshLessons);
  }
  loadMore = ()=>{
    this.props.fetchLessons();
  }
  render() {
    return (
      <div>
        <HomeHeader/>
        <div ref="container" className="container">
          <Carousel sliders={this.props.sliders}/>
          <LessonList
            loadMore = {this.loadMore}
            lessons = {this.props.lessons}/>
        </div>
      </div>
    )
  }
}