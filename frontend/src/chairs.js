import Footer from "./Components/Footer";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useContext,useEffect,useState } from "react";
import { Context } from "./Components/contexts";
import { getproduct, getproductByCategory } from "./Services/api";

function Chairs() {

  //i have committed usecontext here

const [productdata, setProductdata] = useState([]);
const category = 'Chairs';

useEffect(() => {
  getProductDetail();
}, [category]);

const getProductDetail = async () => {
  try {
    const result = await getproductByCategory(category);
    setProductdata(result.data);
  } catch (error) {
    console.log("Error ", error);
  }
};

    return (
      <>
        <Row xs={1} md={3} className="g-4">
        {
        productdata.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={item.pic} style={{width:'100%',height:'40vh'}}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
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

export default Chairs;