import React from 'react';
import'./Man.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col, Container
  } from 'reactstrap';

const Man = (props) => {
   // console.log(props.man.thumbnail);

    //Destructuring 
    const{squareImage,personName,
        source,
        state,
        gender,
        rank }=props.man;


    return (
        <div>
   
    <Card className="size">
    <CardImg top width="100%" src={squareImage} alt="Card image cap" height="200px"  />
        <CardBody>
        <h1>{personName}</h1>
         <p>{source}</p>
         <p>{state}</p>
         <p>{gender}</p>
         <p>{rank}</p>
       
          <Button>Button</Button>
        </CardBody>
      </Card>
    

      </div>
    );
};

export default Man;