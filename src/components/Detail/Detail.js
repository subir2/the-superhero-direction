import React from 'react';
import './Detail.css'

const Detail = (props) => {
    console.log(props.details);

    let total=0;
    //Destructuring 
    const{networth}=props.details;

    for (const detail of props.details){
        total=total+parseInt(detail.networth);

    }
    return (
        <div>
            <h1>Person Add {props.details.length}</h1>
            <p>Total Combined NetWorth :{total.toString()} billion USD</p>
        </div>
    );
};

export default Detail;