import Footer from "./Components/Footer";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useContext,useEffect,useState } from "react";
import { Context } from "./Components/contexts";
import { getproduct, getproductByCategory } from "./Services/api";
function Sofa() {

  const [sofadata, setsofadata] = useState([]);
  const category = 'Sofas';

  useEffect(() => {
    getProductDetail();
  }, [category]);
  
  const getProductDetail = async () => {
    try {
      const result = await getproductByCategory(category);
      setsofadata(result.data);
    } catch (error) {
      console.log("Error ", error);
    }
  };

    return (
      <div>

  <div style={{ width: '100%', height: '15vh', backgroundColor: '#858861', color: "white", textAlign: "center", fontSize: '30px', fontFamily: "sans-serif",borderRadius:'10px' }}>
  <h1 style={{position:'relative',top:'20px'}}>WELCOME TO OUR SOFA's SECTION</h1>
</div>
<hr></hr>

<div>
        <Row xs={1} md={5} className="g-4">
        {
        sofadata.map((item, idx) => (
          <Col key={idx}>
            <Card style={{width:'80%',height:'50vh'}}>
              <Card.Img variant="top" src={`https://mydata-qt8r.onrender.com/${item.pic}`} style={{width:'100%',height:'20vh'}}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
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