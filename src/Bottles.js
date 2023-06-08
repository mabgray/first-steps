import React from 'react';
import './Bottles.css';


const spices = [
    {name: "black salt", id:1},
    {name: "paprika", id:2},
     {name: "pepper", id:3}
];


 export function Bottles(){
    const renderedSpiceList = spices.map(spice => 
    <div key={spice.id} className="bottle" >
       <p className="bottle-text">{spice.name}</p> 
    </div>
    );


    return (
        <div className="bottle">
            <p className="bottle-text">{renderedSpiceList}</p>
        </div>

        
    );
    
}