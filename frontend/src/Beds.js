import React, { useContext,useEffect,useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Context } from "./Components/contexts";
import { AiOutlineHeart } from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Components/Footer';
import { getproductByCategory } from "./Services/api";

function Beds() {



  const [beddata, setbeddata] = useState([]);
  const category = 'Beds';

  useEffect(() => {
    getProductDetail(category);
  }, [category]);
  
  const getProductDetail = async (category) => {
    console.log(category);
    try {
      const result = await getproductByCategory(category);
      setbeddata(result.data);
    } catch (error) {
      console.log("Error ", error);
    }
  };



  const {handleAddToCart, setwishlist, wishlist } = useContext(Context);


  const handleAddToWishlist = (item) => {
    setwishlist([...wishlist, item]);
  }



  return (
    <div style={{backgroundColor:"#CED2CC"}}>
      <Carousel style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
        <Carousel.Item>
          <img style={{ width: "100%", height: "50vh" }} src={'https://images.unsplash.com/photo-1660238285804-397b269579f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} ></img>
          <Carousel.Caption>
            <h1>OUR BED SECTION</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ width: "100%", height: "50vh" }} src={'https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=1024x1024&w=is&k=20&c=rKsdxGWZ9i0KlI_eScMYiX_Ju4f1f4DsgsqXZM-07_E='}></img>
          <Carousel.Caption>
            <h1>OUR BED SECTION</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ width: "100%", height: "50vh" }} src={'https://images.unsplash.com/photo-1475592827823-4e8548bbc506?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></img>
          <Carousel.Caption>
            <h1>OUR BED SECTION</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>


      <Row xs={1} md={3} className="g-4">
        {beddata.map((item, idx) => (
          <Col key={idx}>
            <Card style={{backgroundColor:'black'}}>
              <Card.Img
                variant="top"
                src={item.pic}
                style={{ width: "100%", height: "40vh" }}
              />
              <Card.Body style={{backgroundColor:'#EBEDDF'}}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Title>{item.description}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>
              <Button onClick={() => handleAddToCart(item)}style={{background: 'linear-gradient(90deg, rgba(156,220,204,1) 0%, rgba(111,170,168,1) 35%, rgba(158,204,203,1) 100%)',width:'50%',color:'black',textDecoration:'none'}}>Add To Cart</Button>
              <Button onClick={() => handleAddToWishlist(item)}  style={{background: 'linear-gradient(90deg, rgba(156,220,204,1) 0%, rgba(111,170,168,1) 35%, rgba(158,204,203,1) 100%)',width:'50%',color:'black',marginLeft:'183px',marginTop:'-38px'}} ><AiOutlineHeart size={"20px"} /></Button>

            </Card>
          </Col>
        ))}
      </Row>

      <Footer/>
    </div>
  );
}

export default Beds;
