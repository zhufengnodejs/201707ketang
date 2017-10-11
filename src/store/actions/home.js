import {getSliders,getLessons} from '../../api/home';
import * as types from '../action-types';
export default {
  //获取轮播图
  fetchSliders(){
   return (dispatch,getState)=>{
     getSliders().then(sliders=>{
       dispatch({
         type:types.FETCH_SLIDERS,
         sliders
       });
     })
   }
  },
  fetchLessons(){
    return (dispatch,getState)=>{
      dispatch({
        type:types.FETCH_LESSONS
      });
      getLessons().then(lessons=>{
        dispatch({
          type:types.FETCH_LESSONS_SUCCESS,
          lessons
        });
      })
    }
  }
}