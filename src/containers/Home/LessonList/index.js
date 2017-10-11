import React, {Component} from 'react';
import './index.less'
export default class LessonList extends Component {
  render() {
    return (
      <ul className="lesson-list">
        {
          this.props.lessons.list.map((item,index)=>(
            <li key={index}>
              <img src={item.url}/>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </li>
          ))
        }
      </ul>
    )
  }
}