import {register} from '../../api/session';
export default {
  register(user){
    return function(dispatch,getStatus){
      register(user).then(data=>{
        let {code} = data;
        if(code == 0){//注册成功了,跳转到登录页

        }else{

        }
      });
    }
  }
}