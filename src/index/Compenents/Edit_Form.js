 
import React  from 'react';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload  } from '@fortawesome/free-solid-svg-icons'

import {connect} from "react-redux";
import {updateData} from "../store/actions/actions";
class Edit_Form extends  React.Component{
 

   state={
        title:" zzz",
         topic:""
    };
 
 
 

    updatetopic(){
      
      //  let id=this.props.edit_topic.id;
   console.log(this.state.title)     
//console.log(this.props);
 
// return false ;
    //  let objectdata={data:this.state.data,id:id}
      //  this.props.updateData(objectdata);
        //this.props.updateState("id03");
      }

     
   
 
    onChangeTitle=(event)=>{
   
       this.setState({title:event.target.value})
        
    }
    onChangeTopic=(event)=>{
   
      this.setState({topic:event.target.value})
         
     }
 

render(){

     return(
      
<div>
  
<div class="w3-container">
      
    
   <label>Title</label>
   <input    className="w3-input"   onChange={this.onChangeTitle}   type="text" />
   
   <label>Topic</label>
   <textarea  rows={10}     onChange={this.onChangeTopic}  class="w3-input" type="text" /> 
 
   <button    class="w3-button w3-red w3-margin  w3-white  w3-hover-white w3-text-red  "> <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon></button>

 
      </div>
      <footer class="w3-container w3-center ">
      <button    onClick={this.updatetopic} class="w3-button w3-red w3-margin  "> Add Topic</button>
      </footer>
 
 
</div>


    
    )
}}


 

export default connect(null,{updateData})(Edit_Form); 
 