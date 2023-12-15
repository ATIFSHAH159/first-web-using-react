import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Context } from "./Components/contexts";

function AddtoCart() {
  const { cartitems } = useContext(Context);

  console.log("selectedProduct", cartitems);

  return (
    <Row xs={1} md={3} className="g-4">
      {cartitems.map((item) => (
        <Col key={item.id}>
          <Card>
            <Card.Img
              variant="top"
              src={item.Pic}
              style={{ width: "100%", height: "40vh" }}
            />
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
            </Card.Body>
            <Button>Buy</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default AddtoCart;
