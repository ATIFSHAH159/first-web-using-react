import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Context } from "./Components/contexts";

function AddtoCart() {
  const { selectedProduct } = useContext(Context);

  console.log("selectedProduct", selectedProduct);

  return (
    <>
      {selectedProduct && (
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={selectedProduct.Pic}
                style={{ width: "100%", height: "40vh" }}
              />
              <Card.Body>
                <Card.Title>{selectedProduct.Name}</Card.Title>
                <Card.Text>{selectedProduct.price}</Card.Text>
              </Card.Body>
              <Button>Buy</Button>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
}

export default AddtoCart;
