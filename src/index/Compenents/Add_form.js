 
import React  from 'react';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload  } from '@fortawesome/free-solid-svg-icons'

import {connect} from "react-redux";
import {addData} from "../store/actions/actions";
import { date } from 'yup';
class Add_Topic extends  React.Component{

    state={

        title:"",
        topic:"",
        imag_base64:"" ,
        date_of_topic:"",
        data:[]
    }


    

     
   
    addTopic=()=>{

       
      if(this.state.title.trim()=="" || this.state.topic.trim()=="" ){
   
       alert("You must put a title and content");
          return false ;
   
      }

 
        this.props.addData({"date_of_topic": new Date().toLocaleTimeString()+ "  " +new Date().toLocaleDateString() ,"id": new Date().getUTCMilliseconds(),"title":this.state.title,"topic":this.state.topic ,"imgurl":this.state.imag_base64}) ;
      
           this.props.updateState("id01");
 
   
    }
    onChangeTitle=(event)=>{
   
       this.setState({title:event.target.value})
        
    }
    onChangeTopic=(event)=>{
   
        this.setState({topic:event.target.value})
         
     }
     upfile=(event)=>{
         console.log(event);

     }

render(){


    return(
        
<div>
  
<div class="w3-container">
      <form class="w3-container">
   
   <label>Title</label>
   <input  className="w3-input"  onChange={this.onChangeTitle}   type="text" />
   
   <label>Topic</label>
   <textarea  rows={10}  onChange={this.onChangeTopic}  class="w3-input" type="text" /> 

   {
 /*
   <input type="file"     id="file" onChange={this.upfile} />
   
   <label  for="file"  class="w3-button w3-red w3-margin  w3-white  w3-hover-white w3-text-red  "> <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon></label>


 */


   }
  
 </form>
      </div>
      <footer class="w3-container w3-center ">
      <button    onClick={this.addTopic}class="w3-button w3-red w3-margin  ">Add Topic</button>
      </footer>
 
 
</div>


    
    )
}}


 
 

export default connect(null,{addData})(Add_Topic); 
 