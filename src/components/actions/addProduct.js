import {ADD_PRODUCT,LOCAL_DATA} from '../actions/type';

export const addProduct =(data)=>async(dispatch) => {
    dispatch({
       type:ADD_PRODUCT,
       payload:data
   })


}

export const local =(data)=>async(dispatch) => {
    dispatch({
       type:LOCAL_DATA,
       payload:data
   })
   localStorage.setItem('sumProduct', JSON.stringify(data))
}
export default {addProduct,local}