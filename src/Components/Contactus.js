import Footer from "./Footer";
import '../Assests/Contactus.css';
import { useRef, useEffect } from "react";
function Contactus()
{
  const Reference = useRef(null);

  useEffect(() => {
    Reference.current.focus();
    window.scrollTo(0,0);
  }, []);

 
  
    return (
        <>
        <div />
      
        <br></br>
           <div className="container">
        <form action="action_page.php">

          <label htmlFor="fname">First Name</label>
          <input ref={Reference}  type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

          <input type="submit" value="Submit" />

        </form>
      </div>
      <br></br>
        <Footer />
        </>
    );
}
export default Contactus;