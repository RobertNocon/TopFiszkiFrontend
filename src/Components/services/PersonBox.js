import React from 'react';

function PersonBox(props){
   return(
       <div className="ContactCard">
           <h2>{props.name}</h2>
        <img src={props.imgUrl} alt="img" />
           
       </div>
   )
}
export default PersonBox;