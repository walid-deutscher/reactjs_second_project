import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import React  from 'react';
import { Link} from'react-router-dom'

export default  function Menu(){


    return(
        
<div>
  

 
<div >
  <div className="w3-bar w3-red w3-card">
    <a className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"     >
    <FontAwesomeIcon icon={faBars} />
      </a>
    <Link   to ='/' className=" w3-animate border-bottom  w3-hover-red w3-bar-item w3-button w3-padding-large  ">HOME</Link>
    <Link to ='/topics'   className="  w3-animate  border-bottom  w3-hover-red  w3-bar-item w3-button w3-padding-large w3-hide-small  ">Blog</Link>
  
   </div>
</div>
<div>
<header class="w3-container w3-center w3-padding-48 w3-white">
   
           
   <h1 class="w3-xxxlarge"><b> React.js  </b></h1>
   <h6>Welcome to the blog of <span class="w3-tag w3-white  ">walid mohamed</span></h6>
 </header>

</div>
</div>


    
    )
}


