import React from 'react';
import '../Assests/Footer.css';
import { FiMail } from 'react-icons/fi';
import { BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import img10 from '../Images/Navlogo1.png';


function Footer() {
  return (
    <footer>
      <div className='footerhead'>
        <div className='headleft'>
          <p className='leftparagraph'>Get Connected With us on Social Media's</p>
        </div>
        <div className='headright'>
          <p className='rightparagraph'>
            <a href="https://www.facebook.com"><BsFacebook fontSize={'30px'} className='icon' /></a>
            <a href="https://www.twitter.com"><BsTwitter fontSize={'30px'} className='icon' /></a>
            <a href="https://www.linkedin.com"><BsLinkedin fontSize={'30px'} className='icon' /></a>
            <a href="https://www.gmail.com"><FiMail fontSize={'30px'} className='icon' /></a>
          </p>
        </div>
      </div>

      <div className='footermain'>
        <div className='part1'>
          <img src={img10} style={{width:"100%",height:"40vh"}}></img>
        </div>
        <div className='part2'>
          <h5 className='p1heading'> Mapple and Leaf Interiors</h5>
          <hr style={{ border: "2px solid white", width: "80%", marginLeft: "30px", }}></hr>
          <p className='pparagraph'>Explore our wide range of stylish and high-quality furniture pieces for every room. Find inspiration, shop with confidence, and stay connected with our store through our footer links, including Home, Catalog, About Us, Contact, and Customer Service.</p>
        </div>
        <div className='part3'>
          <h5 className='productheading'>Products</h5>
          <hr style={{ border: "2px solid white", width: "80%", marginLeft: "30px", }}></hr>
          <p className='productsparagraph'>
            <Link to={"/Beds"} style={{textDecoration:"none",color:"white"}}>
              Beds
            </Link>
            <br></br>
            <Link to={"/Sofa"} style={{textDecoration:"none",color:"white"}}>
              Sofa
            </Link>
            <br></br>
            <Link to={"/chairs"} style={{textDecoration:"none",color:"white"}}>
              Chairs
            </Link>
          </p>
        </div>
        <div className='part4'>
          <h5 className='addressheading'>Address</h5>
          <hr style={{ border: "2px solid white", width: "80%", marginLeft: "30px", }}></hr>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

          <p className='addressparagraph'><i className="fas fa-map-marker-alt" style={{ marginRight: "5px" }}></i>Oppsite to Akbar tiles Main Pindi Road Kohat</p>
        </div>
        <div className='part5'>
          <h5 className='contactheading'>Contact Us</h5>
          <hr style={{ border: "2px solid white", width: "80%", marginLeft: "30px", }}></hr>

          <a href="https://www.gmail.com" className='contact' style={{textDecoration:"none",color:"white"}}><FiMail fontSize={'20px'} className='icon1' />aatifshah15@gmail.com</a>
          <br></br>
          <a href="https://www.facebook.com" className='contact' style={{textDecoration:"none",color:"white"}}><BsFacebook fontSize={'20px'} className='icon1' />Aatif Shah</a>
          <br></br>
          <a href="https://www.linkedin.com" className='contact' style={{textDecoration:"none",color:"white"}}><BsLinkedin fontSize={'20px'} className='icon1' />Aatif shah</a>

        </div>
        <div className='part6'></div>

      </div>

      <div className='footerbottom'>
        <i className="fa fa-copyright"></i> 2023 Mapple And Leaf Interiors. All Rights Reserved.
        <br></br>
        <p> "Where Comfort Meets Style."</p>

      </div>

    </footer>
  );

}
export default Footer;