import Footer from "./Components/Footer";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { Context } from "./Components/contexts";

function Sofa() {

  const{product3}=useContext(Context)

    return (
      <div>

  <div style={{ width: '100%', height: '15vh', backgroundColor: '#858861', color: "white", textAlign: "center", fontSize: '30px', fontFamily: "sans-serif",borderRadius:'10px' }}>
  <h1 style={{position:'relative',top:'20px'}}>WELCOME TO OUR SOFA's SECTION</h1>
</div>
<hr></hr>

<div>
        <Row xs={1} md={5} className="g-4">
        {
        product3.map((item, idx) => (
          <Col key={idx}>
            <Card style={{width:'80%',height:'50vh'}}>
              <Card.Img variant="top" src={item.Pic} style={{width:'100%',height:'20vh'}}/>
              <Card.Body>
                <Card.Title>{item.Name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>
              <Button style={{backgroundColor: '#858861'}}>Buy</Button>
            </Card>
          </Col>
        ))}
      </Row>
      </div>


      <br></br>
      <Footer /> 
      </div>
    );
     
}

export default Sofa;