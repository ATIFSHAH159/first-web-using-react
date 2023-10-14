import Footer from "./Components/Footer";
import './Assests/Aboutus.css';
import img11 from './Images/myimg.jpg';
function Aboutus() {
    return (
        <>
            <div className="profile1">
                <div className="p1left">
                    <img src={img11} style={{ width: "100%", height: "45vh", borderRadius: "50%" }}></img>
                </div>
                <div className="p1right">
                    <h3 className="heading">SYED ATIF SHAH</h3>
                    <hr style={{border:"2px solid black", width:"50%",marginLeft:"200px"}}></hr>
                    <h5 className="heading">Web Developer</h5>
                    <hr style={{border:"2px solid black", width:"50%",marginLeft:"200px"}}></hr>
                    <p className="paragraph">Hello! I'm Syed Atif Shah, a passionate computer science student with a deep love for web development. I'm thrilled to welcome you to my corner of the internet, where I showcase my skills and share my journey in the world of technology.</p>
                    <h5 className="heading">Web Development Enthusiast</h5>
                    <hr style={{border:"2px solid black", width:"50%",marginLeft:"200px"}}></hr>
                    <p className="paragraph">What truly sets my heart on fire, however, is web development. I've spent countless hours honing my skills in front-end and back-end technologies, allowing me to transform creative ideas into functional and visually appealing websites and web applications. Whether it's crafting elegant user interfaces, optimizing website performance, or solving complex coding challenges, I thrive on the challenges web development presents.</p>

                </div>
            </div>

            <Footer />
        </>
    );

}
export default Aboutus;