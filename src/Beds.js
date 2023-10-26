import Footer from "./Components/Footer";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect } from "react";
import { Context } from "./Components/contexts";

function Beds() {

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);


const{product1}=useContext(Context);

    return (
      <>
        <Row xs={1} md={3} className="g-4">
        {
        product1.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={item.Pic} style={{width:'100%',height:'40vh'}}/>
              <Card.Body>
                <Card.Title>{item.Name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>
              <Button>Buy</Button>
            </Card>
          </Col>
        ))}
      </Row>
      <br></br>
      <Footer /> 
      </>
    );
     
}

export default Beds;
