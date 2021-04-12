import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import loginReducer from './reducer/loginReducer'
import addProduct from './reducer/addReducer'

const reducer=combineReducers({
    login:loginReducer,
    product:addProduct
})


// const middleware=[thunk]
const initialState={
    user: {
        user: localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user'))
            : {}
        
    },
    addProduct:{
         addProduct:localStorage.getItem('addProduct')
         ? JSON.parse(localStorage.getItem('addProduct'))
         : ""
    } 
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;