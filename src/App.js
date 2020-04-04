import React ,{Component} from 'react';
import './App.css';
 
import {  BrowserRouter as Router,Route} from'react-router-dom'
 
 import store from'./index/store/store';
 import {Provider} from "react-redux";
 
 import Menu from'./index/Compenents/Menu'
  
 import Topics from'./index/pages/topics'
class App extends Component {
 
  
constructor(){
  super()
 
  
  }
    
   render(){

    return(
    <Router>
 
    <div>
 <Menu></Menu>
 
 </div>
 
 
         <Route path='/topics' component={Topics} />
       
    </Router>)
   }
   



                 }

                      
                 function AppWithStore(){
                  return <Provider store={store}>
                    <App />
                  </Provider>
                }
                
 
export default AppWithStore;
                
 
 


 































 