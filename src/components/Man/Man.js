import React from 'react';
import'./Man.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBooth} from '@fortawesome/free-solid-svg-icons'
  import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardBody,
     Button
  } from 'reactstrap';

const Man = (props) => {
   // console.log(props.man.thumbnail);

   
    const element = <FontAwesomeIcon icon={faPersonBooth} />
    
     //Destructuring 
    const{squareImage,personName,
        source,
        state,
        gender,
        networth,
        rank }=props.man;



    return (
        <div>
   
    <Card className="size">
    <CardImg className="img1" top width="100%" src={squareImage} alt="Card image cap" height="200px"  />
        <CardBody>
        <h6>{personName}</h6>
         <p>Institute:{source}</p>
         <p>City:{state}</p>
         <p>Gender:{gender}</p>
         <p>Net worth:{networth} billion USD</p>
         <p>Rank:{rank}</p>
       
          <Button onClick={()=>props.event(props.man)}>{element} Details</Button>
      

        </CardBody>
      </Card>
    

      </div>
    );
};

export default Man;