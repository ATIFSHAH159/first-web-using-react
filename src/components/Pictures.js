import Carousel from 'react-bootstrap/Carousel';
import img1 from '../picturesforweb/image.png';
import img2 from '../picturesforweb/Image2.png';
import img3 from '../picturesforweb/Image3.png';
function UncontrolledExample() {
  return (
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
  );
}

export default UncontrolledExample;