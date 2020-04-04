import {createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
 import List  from'./reducers/index';
 
function  initialState(){
   
  const state = {
      
    topics:[]
}

    return state
     

}


 

    const store = createStore(List,  initialState(), compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )) ;

    
  
export default store ;