
import React, { useState } from 'react';
import './Bottles.css';


const spices = [
    {name: "black salt", id:1, gotIt: false},
    {name: "paprika", id:2, gotIt: false },
     {name: "pepper", id:3, gotIt: false}
];


 export function Bottles(){

   const [spiceList, setSpiceList] = useState(spices);


   const manageClick = (spiceId) => {
      const updatedSpiceList = spiceList.map(spice => {
         if(spice.id === spiceId){
            return {
              ...spice,
              gotIt: !spice.gotIt
            };
         }
         return spice;
      })
     
      setSpiceList(updatedSpiceList);
   }

  

    const renderedSpiceList = spiceList.map(spice => 
      <div key={spice.id}
         className={spice.gotIt ? "bottleColor" : "bottle" }
          
        
         onClick={()=> {
            manageClick(spice.id)
         }}


      >
         <p className="bottle-text">{spice.name}</p> 
      </div>
      
      );


      return (
         
         <div  className="bottle-container">
         {renderedSpiceList}
         </div>
         

        
    );
    
}