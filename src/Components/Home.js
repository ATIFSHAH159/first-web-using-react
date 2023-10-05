import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/image.png';
import img2 from '../Images/Image2.png';
import img3 from '../Images/Image3.png';
import Card from 'react-bootstrap/Card';
import img4 from '../Images/bedcard.png';
import img5 from '../Images/sofacard.png';
import img6 from '../Images/chaircard.png';
import '../Assests/Home.css';
import Footer from './Footer';
function  Home(){
    return (
<div>


<div>
 <Carousel>
      <Carousel.Item>
        <img style={{width:"100%" , height:"80vh"}} src={img1} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%" , height:"80vh"}} src={img2} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"100%" , height:"80vh"}} src={img3} alt='' />
      </Carousel.Item>
    </Carousel>
</div>



<div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
  <h1>Welcome to Our Store</h1>
  <h3>"Where Comfort Meets Style."</h3>
  <p>"Discover timeless elegance and impeccable craftsmanship in our furniture store. Our curated collection blends artistry and comfort, uniting form and function to enrich your living spaces.<br/>
Explore textures, colors, and styles that harmonize seamlessly. From classic warmth to modern allure, our store caters to diverse tastes. Our knowledgeable staff helps you find pieces that fit your space and resonate with your soul.<br/>
Turn your house into a home that reflects your unique personality and values. Let us be your partner in creating inspiring spaces, where every piece tells a story, and your vision of a beautiful, harmonious home comes to life."</p>
</div>




<div className='cards'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} style={{width:"100%",height:"40vh"}}/>
      <Card.Body>
        <Card.Title>Beds</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img5} style={{width:"100%",height:"40vh"}} />
      <Card.Body>
        <Card.Title>Sofa's</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img6}  style={{width:"100%",height:"40vh"}}/>
      <Card.Body>
        <Card.Title>Chairs</Card.Title>
      </Card.Body>
    </Card>
</div>


<Footer />

</div>
    );
    
}
export default Home;