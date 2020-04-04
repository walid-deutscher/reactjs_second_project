import React,{Component} from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus ,  faUpload ,faEdit,faCog ,faCartPlus,faTrash} from '@fortawesome/free-solid-svg-icons'
 import  Add_form  from'../Compenents/Add_form'
 import Topic from'../Compenents/Topic'
 import Login from'../Compenents/Login'
 
 import {removeData ,updateData } from "../store/actions/actions";
 import  Edit_form  from'../Compenents/Edit_Form'
 import {connect} from "react-redux";
class Topics extends React.Component {

state={
    
  id_edit:null ,
  title_edit:"",
  topic_edit:"",
  imag_base64_edit:"" ,
  date_of_topic_edit:""
 

}
removeTopic=(id)=>{
  this.props.removeData(id);
   this.showtopics();
}

updatetopic=()=>{

   // walid mohamed   i dont want use  ES6 ☹ I still learning  ☹
  let Update_data=
  {  
  id:this.state.id_edit ,
  title:this.state.title_edit ,
  topic:this.state.topic_edit ,
  imag_base64:this.state.imag_base64_edit  ,
  date_of_topic:this.state.date_of_topic_edit 
  }

   // walid mohamed   i dont want use ES6 ☹ I still learning  ☹

let updatetopic={data:Update_data,id:Update_data.id}
 
  this.props.updateData(updatetopic);
   this.updateState("id03");
  }



onChangeTitle=(event)=>{
 
this.setState({ title_edit:event.target.value})  

}
onChangeTopic=(event)=>{
 
this.setState({ topic_edit:event.target.value})  
    
}

componentWillMount() {
 this.showtopics();
   
 }


showtopics=()=>{
  this.setState({topics:this.props.topics}) ;
}


updateState=(id)=>{
 
 this.close(id);
 this.showtopics();
}

open=(id ,data)=>{

  if(id=="id03"){ this.close("id02") ;

 console.log(data);
  this.setState({edit_topic:[data]})
  // walid mohamed   i dont want use  escma 6 ☹ I still learning  ☹
   this.setState({title_edit:data.title})
   this.setState({ topic_edit:data.topic})
   this.setState({id_edit:data.id})
   this.setState({ imag_base64_edit:data.imag_base64})
   this.setState({ date_of_topic_edit:data. date_of_topic})
 // walid mohamed   i dont want use  escma 6 ☹ I still learning  ☹
  }
 document.getElementById(id).style.display='block';
}



close=(id)=>{
  document.getElementById(id).style.display='none';
  if(id=="id03"){ this.open("id02")}
}





    render(){
        
        return(

         
        <div className="w3-center">


{/***** Add topic part******/}
     <div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-animate-top w3-card-4">
      <header class="w3-container w3-red"> 
        <span onClick={()=>this.close("id01")} 
        class="w3-button w3-display-topright w3-hover-red">&times;</span>
        <h2>Add page</h2>
      </header>
      <Add_form updateState={this.updateState} />
    </div>
  </div>
{/*************/}



{/***** Update topic  ******/}
<div id="id03" class="w3-modal">
    <div class="w3-modal-content w3-animate-top w3-card-4">
      <header class="w3-container w3-red"> 
        <span onClick={()=>this.close("id03")} 
        class="w3-button w3-display-topright w3-hover-red">&times;</span>
        <h2>edit</h2>
      </header>
      <div class="w3-container">
      
    
   <label>Title</label>
   <input    className="w3-input"  value={this.state.title_edit}  onChange={this.onChangeTitle}   type="text" />
   
   <label>Topic</label>
   <textarea  rows={10}    value={this.state.topic_edit}   onChange={this.onChangeTopic}  class="w3-input" type="text" /> 
 
   <button    class="w3-button w3-red w3-margin  w3-white  w3-hover-white w3-text-red  "> <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon></button>

 
      </div>
      <footer class="w3-container w3-center ">
      <button    onClick={ this.updatetopic} class="w3-button w3-red w3-margin  ">EDT Topic</button>
      </footer>
 
 
 


     </div>
  </div>
{/*************/}



{/******UPDATE + DELETE ******/}

  <div id="id02" class="w3-modal">
    <div class="w3-modal-content w3-animate-top w3-card-4">
       
    <div>
<header class="w3-container w3-red"> 
<button class="  w3-button w3-red w3-right" onClick={()=>this.close("id02")}>X </button>
        <h4>Setting page</h4>
      </header>

   <br />
 { this.props.topics.map((topic)=>(
    <div class="w3-row">
 
    <div class="w3-col s7 w3-center">  
    <p></p>
    {topic.title}
        
   </div>
    
    <div class="w3-col s3   w3-center">
   
    <button  onClick={()=>this.removeTopic(topic.id)} class="w3-button w3-yellow w3-margin"><FontAwesomeIcon icon={faTrash} /></button>
  
    <button  onClick={()=>this.open("id03",topic)}  class="w3-button w3-green  "><FontAwesomeIcon  icon={ faEdit} /></button>
   
        </div>
          
  
  </div>

))}

      
 {/*************/}



</div>

    
      
    </div>
  </div>





             <br />
             <div class="w3-text-red  w3-xlarge w3-left"> 
             
             <button  onClick={()=>this.open("id01")} class="w3-button w3-hover-white w3-red w3-margin  "><FontAwesomeIcon icon={faPlus} /> Add Topics</button>
             <button  onClick={()=>this.open("id02")} class="w3-button w3-hover-white w3-red w3-margin  "><FontAwesomeIcon icon={faCog} />Topics Administration</button>

              </div>
              <br />
            
    <div class="w3-row-padding">

  <div class="w3-col m8 w3-container  ">
<p></p>




{ this.props.topics.map((topic)=>(<Topic key={topic.id} topic={topic} />))}

 








  </div>
 
  <div class="w3-col m4 w3-container">
  <Login />
  </div>
</div>
        </div>)
    }

}  

const mapStateToProps = (state) => {
  return {
      topics: state.topics ,
  };
}


export default connect(mapStateToProps,{removeData ,updateData})(Topics) 