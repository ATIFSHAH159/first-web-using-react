import Footer from "./Components/Footer";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Beds() {
    const bed_product = [
        { id: 1, Name: "Prime Bed", price: "RS-10000", Pic: "https://media.istockphoto.com/id/1474579509/photo/contemporary-bed-isolated-on-white-background-front-view-include-clipping-path-close-up.jpg?s=2048x2048&w=is&k=20&c=zotOBU0ItuJRbTLy3TfFypgEt6pNmKfIXlW5xD5WMpU=" },
        { id: 2, Name: "King Bed", price: "RS-11000", Pic: "https://media.istockphoto.com/id/1454697447/photo/black-luxury-modern-retro-style-master-bedroom.jpg?s=1024x1024&w=is&k=20&c=GIpARCY2A-GeIKfqvqfU8XRf1LDIxa58R6LVu5eeK48=" }, 
        { id: 3, Name: "DreamScape Slumber Haven", price: "RS-12000", Pic: "https://media.istockphoto.com/id/1457954746/photo/a-bedroom-with-a-wood-headboard-and-footboard.jpg?s=1024x1024&w=is&k=20&c=ODdZJllWMqbbQ1ssfop-0NBdBHH3TUlM5nVCB0nKc1I=" },
        { id: 4, Name: "Serenity Cloud Bed", price:"RS-13000", Pic: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" },
        { id: 5, Name: "Zenith Oasis Sleeper", price:"RS-14000", Pic: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" },
        { id: 6, Name: "Elysian Velvet Dreamer", price:"RS-15000", Pic: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" },
        { id: 7, Name: "Aurora Blissful Retreat", price:"RS-16000" ,Pic: "https://plus.unsplash.com/premium_photo-1675745329401-ed4b9b73be6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" },
        { id: 8, Name: "Celestial Comfort Cruiser", price: "RS-17000", Pic: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80" },
        { id: 9, Name: "Midnight Mirage Haven", price: "RS-18000", Pic: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" },
        { id: 10, Name: "CozyNook Serenade Bed", price: "RS-19000", Pic: "https://images.unsplash.com/photo-1586836930332-6a1e2cb08e78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" },
        { id: 11, Name: "Luxury Bed", price: "RS-20000", Pic: "https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" },
        { id: 12, Name: "Zenith Zephyr Rest Station", price: "RS-21000", Pic: "https://images.unsplash.com/photo-1632566853092-a0faa4665585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1799&q=80" },
    ];

    return (
      <>
        <Row xs={1} md={3} className="g-4">
        {
        bed_product.map((item, idx) => (
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
