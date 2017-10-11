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
          onClick={this.props.loadMore}
          className="load-more">
          加载更多
        </li>
      </ul>
    )
  }
}