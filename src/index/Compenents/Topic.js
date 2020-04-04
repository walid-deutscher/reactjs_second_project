 
import React  from 'react';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight  , faClock } from '@fortawesome/free-solid-svg-icons'
 

class  Topic extends  React.Component{
    
render(){


    return(
        
<div>
  


<div class="w3-border w3-white ">


<div class=" w3-padding-48 ">



  <div class="w3-container  w3-center  ">
  
  <h3  >    <p>{this.props.topic.title}
  </p></h3>
</div>
  <img src="data:image/png;base64,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" />
   <div>
    <p>{this.props.topic.topic}</p>

   <div class="w3-row-padding">
       <div className="w3-col s3 w3-container">
   <button class="w3-button w3-gray w3-margin  ">
       <div className="w3-padding-20">
       <FontAwesomeIcon icon={faClock} /> {" "} 

      { this.props.topic.date_of_topic}


       </div>

       </button>
       </div>
       <div className="w3-col s6 w3-container">
<p>

</p>
       </div>
       <div className="w3-col s3 w3-container">
   <button class="w3-button w3-red w3-margin w3-gray   w3-right "><FontAwesomeIcon icon={faAngleRight} /></button>
       </div>
       </div>
       

 
    

   </div>
 
 
   </div>
 
 

  </div>
 <br />
</div>


    
    )
}}


export default Topic




  