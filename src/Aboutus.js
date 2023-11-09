import Footer from "./Components/Footer";
import './Assests/Aboutus.css';
import img11 from './Images/myimg.jpg';
import img23 from './Images/onlinefur.jpg';
import img24 from './Images/vision.jpg';
import img25 from './Images/homedev.jpg';
function Aboutus() {
    return (
        <div>
            <br></br>
              <div className="main1">
            <div className="left">
                <h1 className="heading">Online Furniture & Decor Shopping Store</h1>
                <hr className="line"/>
                <p>The vital part of every home is furniture, and it’s the first thing to be considered while planning a
                    home decor. Your home furniture has to be presentable and classy, as it depicts your values and
                    mood. It also represents the first impression of your home, and we are sure that you want it to look
                    luxurious and stylish. Always choose to buy furniture online in Pakistan from reputed online
                    furniture and decor store. Urban Galleria makes online furniture shopping with price easy.</p>
            </div>
            <div className="right">
            <img src={img23} style={{width:"100%",height:'59vh',borderRadius:'50%',marginTop:'-10px'}}></img>
            </div>
        </div>
        <br/>


        <div className="main2">
            <div className="left2">
                <img src={img25} style={{width:"80%",height:'59vh',borderRadius:'50%'}}></img>
            </div>
            <div className="right2">
                <h1 className="heading">Home Furniture</h1>
                <hr className="line"/>
                <p>Home furnishing is the dream of every woman. We understand you also want to decorate your home with
                    unique furniture. spring is approaching and its best time to refresh your home décor with colorful
                    and spirited ideas. You can now buy home furniture in Lahore and all across Pakistan. Enjoy up a
                    diverse variety of home furniture on Urban Galleria and cherish a furniture shopping with
                    independence. In addition, we have an online shop for home furniture in Karachi, Lahore, Islamabad
                    and all across Pakistan, also as you can check every smallest detail through online shopping of home
                    furniture regardless of experiencing hectic and tiring shopping spree in the market under the bright
                    sun.</p>
            </div>
        </div>
        <br/>



        <div className="main3">
            <div className="left3">
                <h1 className="heading">Our Vision</h1>
                <hr className="line"/>
                <p>

                    There’s just one way for us to create and that is with intention. Behind the design of our pieces
                    there’s an extensive process in which we combine what inspires us with what is needed, and look for
                    a way to make it unique and functional.

                    We don’t want to just add a new product to our collection, the idea is that each piece would
                    transmit our values, beliefs, and the love and care that’s behind them improving any environment
                    they’re introduced to

                    This is what gives value to what we do and pushes us to continue to improve daily.
                </p>
            </div>
            <div className="right3">
            <img src={img24} style={{width:"110%",height:'59vh',borderRadius:'50%',marginLeft:'100px'}}></img>
            </div>
        </div>
        <br/>



        <div className="main4">
            <div className="left4">
            <img src={img11} style={{width:"100%",height:'59vh',borderRadius:'50%'}}></img>
            </div>
            <div className="right4">
                <h1 className="heading">Our Team Member</h1>
                <hr className="line"/>
                <h4>SYED ATIF SHAH</h4>
                <p>As a passionate and creative web developer, I thrive on turning innovative ideas into beautifully
                    crafted websites. I'm a strong advocate for responsive and user-friendly web design. I believe in
                    creating web experiences that are not only visually appealing but also highly functional and
                    accessible across various devices. HTML, CSS, JavaScript, and the latest frameworks are my trusty
                    tools for crafting seamless user interfaces and interactive web applications.</p>
            </div>
        </div>

<br></br>


            <Footer />
        </div>
    );

}
export default Aboutus;