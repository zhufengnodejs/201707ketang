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
    default:
      return state;
  }
}