import * as types from '../action-types';
let initState = {
  user:null,//如果登录成功的话，会把登录用户信息放在user里
  success:null,//这里放成功的消息
  error:null//这里放失败的消息
}
//1. 注册失败，将失败的原因写入error
//2. 注册成功，将成功的消息写入success
//2. 登录失败，将失败的原因写入error
//3. 登录成功，将成功的消息写入success,并且将用户信息写入user
//
export default function(state=initState,action){
   switch (action.type){
     case types.SET_SESSION_INFO:
       return action.session;
     default:
       return state;
   }
}

