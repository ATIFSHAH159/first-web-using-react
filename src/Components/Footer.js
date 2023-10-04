import React from 'react';
function Footer (){
    return (
 <footer>
   <div style={{width:"100%",height:"40vh",backgroundColor:"black",background:"2px Solid Black"}}>
     <h3 style={{color:"white",textAlign:"center",marginTop:"30px",fontFamily:"sans-serif",}}>Mapple And Pine Interiors</h3>
     <p style={{color:"white",marginTop:"50px",textAlign:"center"}}>"Discover the perfect blend of style and comfort at our furniture shop. We offer a wide range of high-quality furniture pieces that cater to every taste and budget. Whether you're furnishing your home or office, our store is your one-stop destination for elegant and functional furniture solutions."</p>

 <div style={{textAlign:"center"}}>
     <a href="https://www.facebook.com/atif.shah.37819959/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-facebook-square fa-2x" style={{color:"white"}}></i>
      </a>
      <br/>
      <a href="mailto:aatifshah15@gmail.com">
          <i className="fa fa-envelope"></i> Contact Us via Gmail
        </a>
      <p style={{ color: 'white' }}>
        <i className="fa fa-map-marker" aria-hidden="true"></i> Address: Opposite To Akbar tiles Pindi Road Kohat
      </p>
      </div>
      
     
   </div>
   </footer>
    );

}
export default Footer;