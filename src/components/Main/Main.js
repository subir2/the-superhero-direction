import React, { useEffect, useState } from 'react';
import './Main.css';
import Man from '../Man/Man';
import Detail from '../Detail/Detail';

const Main = () => {
const[mans,setMan]=useState([]);
const[details,setDetails]=useState([]);

useEffect(()=>{

    fetch('./products.JSON')
    .then(res=>res.json())
    .then(data=>setMan(data))

},[]);

const event=(man)=>{

    const newArr=[...details,man];           //set data new array from old array
    let uniqueChars = [...new Set(newArr)]; //duplicate value remove from array 
    setDetails(uniqueChars);
    
}


    return (
    <>
        <div className="Main_section">

            <div className="man">
               {
                   mans.map(man=><Man 
                    key={man.key}
                   man={man}
                   event={event}
                   
                   
                   >


                   </Man>)
               }
            </div>

            <div className="cart">
              <Detail details={details}></Detail>
            </div>
            
        </div>
    </>
    );
};

export default Main;