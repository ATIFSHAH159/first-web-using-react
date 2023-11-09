import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Context } from "./Components/contexts";
import{AiOutlineHeart} from 'react-icons/ai';

function Beds() {
  const { product1, addcartitem ,  setwishlist, wishlist} = useContext(Context);


  const handleCartItems = (item, id) => {
    addcartitem(product1, id);
  }
  
  const handleAddToWishlist = (item) => {
    setwishlist([...wishlist, item]);
  }
  


  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {product1.map((item, idx) => (
          <Col key={idx}>
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
              <Link to="/Addtocart">
              <Button onClick={() => handleCartItems(item, item.id )}>Add To Cart</Button>
              </Link>
              <Link to="/Wishlist">
              <Button onClick={() => handleAddToWishlist(item)} ><AiOutlineHeart size={"20px"}/></Button>
              </Link>
             
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Beds;
