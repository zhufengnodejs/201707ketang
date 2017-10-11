import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
export default class Carousel extends Component{
    render(){
        return (
            <div>
              <ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
              </ReactSwipe>
            </div>
        )
    }
}