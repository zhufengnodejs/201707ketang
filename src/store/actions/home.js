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
      let {
        home:{
          lessons:{
            offset,//偏移量
            limit,//获取的条数
            loading,//是否加载中
            hasMore//后面是否还有数据
          }
        }
      } = getState();//获取的是完整的状态
      if(!loading && hasMore){//如果不是加载中的话并且后面有数据的话
        dispatch({
          type:types.FETCH_LESSONS//loading:true
        });
        getLessons(offset,limit).then(lessons=>{
          dispatch({
            type:types.FETCH_LESSONS_SUCCESS,
            lessons
          });
        })
      }
    }
  }
}