import React, { useEffect, useState } from 'react';
import './Main.css';
import Man from '../Man/Man';

const Main = () => {
const[mans,setMan]=useState([]);
useEffect(()=>{

    fetch('./products.JSON')
    .then(res=>res.json())
    .then(data=>setMan(data))

},[]);



    return (
    <>
        <div className="Main_section">

            <div className="man">
               {
                   mans.map(man=><Man man={man}></Man>)
               }
            </div>

            <div className="cart">
              <h1>Cart</h1>
            </div>
            
        </div>
    </>
    );
};

export default Main;