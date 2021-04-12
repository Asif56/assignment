import {ADD_PRODUCT,LOCAL_DATA} from '../actions/type'

const initialState={
    addProduct: localStorage.getItem('addProduct')
    ? JSON.parse(localStorage.getItem('addProduct'))
    : [],
    sumProduct:localStorage.getItem('sumProduct')
    ? JSON.parse(localStorage.getItem('sumProduct'))
    : []
    
}

export default function(state=initialState,action){
    switch(action.type){
        case ADD_PRODUCT:
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        case LOCAL_DATA:
            return {
                ...state,
                data:action.payload,
                loading:false
            }
        default :
          return state;    
    }
}