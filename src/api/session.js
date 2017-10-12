import {post} from './index';
export function register(user){
  return post('/register',user);
}