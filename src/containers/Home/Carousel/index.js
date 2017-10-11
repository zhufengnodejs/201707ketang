import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';
let sliders = [
  'http://www.zhufengpeixun.cn/themes/jianmo2/images/wechat.png',
  'http://www.zhufengpeixun.cn/themes/jianmo2/images/sjz.png',
  'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png'
];
export default class Carousel extends Component {
  render() {
    let options = {
      continuous: true,
      auto:1000,
      //每轮播一次会调用此回调方法并传入最新的索引
      callback:(index)=>{

      }
    };
    return (
      <div className="sliders">
        <ReactSwipe className="carousel" swipeOptions={}>
          {
            sliders.map((item, index) => (
              <div key={index}><img src={item}/></div>
            ))
          }
        </ReactSwipe>
        <div className="dots">
          {
            sliders.map((item, index) => (
              <span key={index}></span>
            ))
          }
        </div>
      </div>
    )
  }
}