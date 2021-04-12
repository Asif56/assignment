import {LOGIN_USER} from '../actions/type';

export const loginSearch =(data)=>(dispatch)=>{
    dispatch({
       type:LOGIN_USER,
       payload:data
   })
   localStorage.setItem('user', JSON.stringify(data))
}
export default {loginSearch}