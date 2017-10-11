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
      let {
        home:{
          lessons:{
            offset,
            limit
          }
        }
      } = getState();//获取的是完整的状态

      getLessons(offset,limit).then(lessons=>{
        dispatch({
          type:types.FETCH_LESSONS_SUCCESS,
          lessons
        });
      })
    }
  },
  refreshLessons(){
    return (dispatch,getState)=>{
      getLessons(0,5).then(lessons=>{
        dispatch({
          type:types.FETCH_LESSONS_RESET,
          lessons,
        });
      })
    }
  }
}