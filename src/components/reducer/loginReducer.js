import {LOGIN_USER} from '../actions/type'

const initialState={
    user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : "",
}

export default function(state=initialState,action){
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        default :
          return state;    
    }
}