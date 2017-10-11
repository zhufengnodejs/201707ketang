import {get} from './index';
//用来获取轮播图数据
export function getSliders(){
   return get('/sliders');
}
//用来获取课程列表
export function getLessons(){
  return get('/lessons');
}