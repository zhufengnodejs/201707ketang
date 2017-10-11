import * as types from '../action-types';
let initState = {
  sliders: [],      // 轮播图数据
  lessons: {        // 课程列表
    list: [],       //课程列表
    hasMore: true,   //是否有更多
    offset: 0,       //偏移量
    limit: 5,         //每页的拉取的条数
    loading: false    //是否正在加载
  }
}

export default function (state = initState, action) {
  switch (action.type) {
    case types.FETCH_SLIDERS:
      return {...state, sliders: action.sliders};
    case types.FETCH_LESSONS://开始获取数据
      return {
        ...state,
        lessons:{
          ...state.lessons,
          loading:true
        }
      }
    case types.FETCH_LESSONS_SUCCESS:
      return {...state, lessons: {
        ...state.lessons,
        list:[...state.lessons.list,...action.lessons.list],
        hasMore:action.lessons.hasMore,
        offset:state.lessons.offset + action.lessons.list.length,
        loading:false //加载完成
      }};
    case types.FETCH_LESSONS_RESET:
      return {...state, lessons: {
        ...state.lessons,
        list:action.lessons.list,
        hasMore:action.lessons.hasMore,
        offset:0,
        loading:false //加载完成
      }};
    default:
      return state;
  }
}