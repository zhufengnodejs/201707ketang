import {getSliders} from '../../api/home';
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
  }
}