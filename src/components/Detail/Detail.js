import React from 'react';
import './Detail.css'

const Detail = (props) => {
    console.log(props.details);

    let total=0;
    let name;
    //Destructuring 
    const{networth}=props.details;

    for (const detail of props.details){
        total=total+parseInt(detail.networth);
      

    }
    return (
        <div class="detail-color">
            <h1>Person Add {props.details.length}</h1>
            <hr></hr>
            <p>Total Combined NetWorth :{total.toString()} billion USD</p>
            <hr></hr>
            <h4>Added Person Name</h4>
            {
                props.details.map(name=><p>{name.personName}</p>)
            }
        </div>
    );
};

export default Detail;