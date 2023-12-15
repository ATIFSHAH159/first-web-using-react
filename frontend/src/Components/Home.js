import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/image.png';
import img2 from '../Images/Image2.png';
import img3 from '../Images/Image3.png';
import '../Assests/Home.css';
import { FaBed } from 'react-icons/fa';
import { LiaChairSolid } from 'react-icons/lia';
import { GiSofa } from 'react-icons/gi';
import { BsFillLampFill } from 'react-icons/bs';
import { GiTreeSwing } from 'react-icons/gi';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ReactCardSlider from 'react-card-slider-component';
import ReactPlayer from 'react-player';
function Home() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1632566853092-a0faa4665585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1799&q=80",
      title: "BED",
      description: "This is a description"
    },
    {
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
      title: "CHAIR",
      description: "This is a second description"
    },
    {
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
      title: "CHAIR",
      description: "This is a third description"

    },
    {
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "BED",
      description: "This is a fourth description"

    },
    {
      image: "https://media.istockphoto.com/id/1500485322/photo/white-wall-interior-living-room-have-orange-leather-sofa-and-decoration-minimal.jpg?s=1024x1024&w=is&k=20&c=a0Z6hXEYDO2LN5aoP-FRNN9NZC95G_nrAYb28FQpTyA=",
      title: "SOFA",
      description: "This is a fifth description"

    },
    {
      image: "https://media.istockphoto.com/id/1398791466/photo/wide-yellow-upholstered-armchair-with-fabric-upholstery-on-wooden-legs-in-retro-style.jpg?s=1024x1024&w=is&k=20&c=cJ982hENDf5_B2d1AnTKgBfkX5OdlE8aaOlDPK7efjc=",
      title: "SOFA",
      description: "This is a sixth description"
    }
  ];


  return (
    <div style={{ backgroundColor: "#AEC6CF" }}>






      <div>
        <Carousel style={{position: 'relative'}}>
          <Carousel.Item>
            <img style={{ width: "100%", height: "80vh" }} src={img1} alt='' />
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ width: "100%", height: "80vh" }} src={img2} alt='' />
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ width: "100%", height: "80vh" }} src={img3} alt='' />
          </Carousel.Item>
        </Carousel>
      </div>
      <br></br>







      {/* LOGOS OF PRODUCTS */}
      <div className='headingoflogos'>
        <h3 style={{ marginTop: "10px" }}>Explore Our Furniture Range</h3>
        <hr style={{ border: "2px solid orange", width: "50%", marginLeft: "300px" }}></hr>
      </div>

      <div className='mainlogos'>
        <div className='innerlogo'>

          <div className='one'>
            <Link to={"/Beds"} style={{ textDecoration: "none", color: "black" }}>
              <FaBed size={"100px"} className='icons' />
              <p className='texticons'>Beds</p>
            </Link>
          </div>

          <div className='two'>
            <Link to={"/chairs"} style={{ textDecoration: "none", color: "black" }}>
              <LiaChairSolid size={"100px"} className='icons' />
              <p className='texticons'>Chairs</p>
            </Link>
          </div>
          <div className='three'>
            <Link to={"/Sofa"} style={{ textDecoration: "none", color: "black" }}>
              <GiSofa size={"100px"} className='icons' />
              <p className='texticons'>Sofa</p>
            </Link>
          </div>
          <div className='four'>
            <BsFillLampFill size={"100px"} className='icons' />
            <p className='texticons'>Lamp</p>
          </div>
          <div className='five'>
            <GiTreeSwing size={"100px"} className='icons' />
            <p className='texticons'>Pod Swing</p>
          </div>
        </div>
      </div>
      <br></br>







      {/* WELCOME TO OUR STORE */}
      <div className='welcome'>
        <h1>Welcome to Our Store</h1>
        <hr style={{ border: "2px solid orange", width: "50%", marginLeft: "50px" }}></hr>
        <h3>"Where Comfort Meets Style."</h3>
        <hr style={{ border: "2px solid orange", width: "50%", marginLeft: "50px" }}></hr>
        <p className='welcomeparagrapgh'>"Discover timeless elegance and impeccable craftsmanship in our furniture store. Our curated collection blends artistry and comfort, uniting form and function to enrich your living spaces.
          Explore textures, colors, and styles that harmonize seamlessly. From classic warmth to modern allure, our store caters to diverse tastes. Our knowledgeable staff helps you find pieces that fit your space and resonate with your soul.
          Turn your house into a home that reflects your unique personality and values. Let us be your partner in creating inspiring spaces, where every piece tells a story, and your vision of a beautiful, harmonious home comes to life."</p>
      </div>
      <br></br>



      <div className='newarivals'>
        <h1 style={{ textAlign: "center" }}>NEW ARRIVAL's</h1>
        <hr style={{ border: "2px solid orange", width: "50%", marginLeft: "250px" }}></hr>
        <ReactCardSlider slides={slides} />
      </div>
      <br></br>




      {/* STORE DESCRIPTION */}
      <div className='des1'>
        <h3>Online Furniture & Decor Shopping Store</h3>
        <hr style={{ border: "2px solid orange", width: "50%", marginLeft: "210px" }}></hr>
        <p className='desparagrapgh'>The vital part of every home is furniture, and it's the first thing to be considered while planning a home decor. Your home furniture has to be presentable and classy, as it depicts your values and mood. It also represents the first impression of your home, and we are sure that you want it to look luxurious and stylish. Always choose to buy furniture online in Pakistan from reputed online furniture and decor store. Urban Galleria makes online furniture shopping with price easy.</p>
      </div>
      <br></br>

      <div style={{ marginLeft: "240px" }}>

        <ReactPlayer url="https://youtu.be/_ZYrmy0Q6Tg?si=n-7LojBsmoiXbasG" controls />
      </div>
      <br></br>


      <div className='threeheadings'>
        <div className='des2'>
          <h3 style={{ marginTop: "10px" }}>Home Furniture</h3>
          <hr style={{ border: "2px solid orange", width: "80%", marginLeft: "45px" }}></hr>
          <p className='desparagrapgh'>Home furnishing is the dream of every woman. We understand you also want to decorate your home with unique furniture. spring is approaching and its best time to refresh your home décor with colorful and spirited ideas. You can now buy home furniture in Lahore and all across Pakistan.
          </p>
        </div>
        <br></br>
        <div className='des3'>
          <h3 style={{ marginTop: "10px" }}>Furniture For Sale Online</h3>
          <hr style={{ border: "2px solid orange", width: "80%", marginLeft: "45px" }}></hr>
          <p className='desparagrapgh'>In this technological era, every little thing is getting digital. Similarly, the idea of online shopping is getting on the nerves. Therefore, now you can also buy furniture online, some of the leading furniture brands have introduced online shopping feature, including Urban Galleria, who are providing quality, luxurious and affordable furniture all over Pakistan. </p>
        </div>
        <br></br>
        <div className='des4'>
          <h3 style={{ marginTop: "10px" }}>Best Luxurious Furniture</h3>
          <hr style={{ border: "2px solid orange", width: "80%", marginLeft: "45px" }}></hr>
          <p className='desparagrapgh'>We understand your need for home decor with unique decorative accessories. What's better than a sparkling and enchanting home flourishing with the most elegant living room furniture?.  Your desire to get luxurious bedroom furniture can be accomplished at this one-stop shop. However, you can warmly welcome your guests and family with cozy and delicious meals every day with eye-catching dining room furniture. </p>
        </div>
      </div>
      <br></br>



      {/* MAP STARTED FROM HERE */}

      <div className='mapmain'>
        <div className='rightmap'>
          <h1 className='mapheading'>Our Location</h1>
          <hr style={{ border: "2px solid orange", width: "80%", marginLeft: "40px" }}></hr>
          <p className='mapparagrapgh'> The store's location is a harmonious fusion of convenience and serenity, where the urban pulse meets the tranquility of nature. Whether you stumble upon it by chance or seek it out deliberately, this enchanting spot promises a delightful experience that lingers in the memory, forever etched in the heart. Come and explore, for our store is not just a destination; it's an invitation to a world of beauty and wonder.</p>
        </div>
        <div className='leftmap'>
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13296.634522378989!2d71.44243150949484!3d33.5752303419743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1696923874291!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />

    </div>
  );

}
export default Home;