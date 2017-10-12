import React, {Component} from 'react';
import './index.less'
export default class LessonList extends Component {
  render() {
    return (
      <ul className="lesson-list">
        <li className="category">
          <i className="iconfont icon-book"></i>
          <span>全部课程</span>
        </li>
        {
          this.props.lessons.list.map((item,index)=>(
            <li className="lesson-info" key={index}>
              <img src={item.url}/>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </li>
          ))
        }
        <li
          className="load-more">
          {
            this.props.lessons.loading?<span>加载中...</span>:(this.props.lessons.hasMore?<span onClick={this.props.loadMore}>加载更多</span>:<span>别扯了，后面没了</span>)
          }
        </li>
      </ul>
    )
  }
}