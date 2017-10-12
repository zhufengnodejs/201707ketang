import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/index";
import './index.less'
import Carousel from "./Carousel/index";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import LessonList from "./LessonList/index";
import {upLoadMore,downRefresh} from '../../utils';
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
  //组件加载完成后
  componentDidMount(){
    upLoadMore(this.refs.container,this.loadMore);
    downRefresh(this.refs.container,this.props.refreshLessons);
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