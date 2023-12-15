import Footer from "./Footer";
import '../Assests/Contactus.css';
import { useRef, useEffect } from "react";
import styled from "styled-components";

function Contactus()
{
  const Reference = useRef(null);

  useEffect(() => {
    Reference.current.focus();
    window.scrollTo(0,0);
  }, []);


  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  h2 {
    text-align: center;
    margin-top: -100px;
  }

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.5rem; /* Adjust the gap between input fields */

        input[type="text"],
        input[type="email"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem; /* Adjust the margin bottom for each input field */
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          background-color: #4caf50; /* Change the background color */
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
        }
      }
    }
  }
`;
 
  
    return (
        <>
       <Wrapper>
      <h2 style={{textAlign:'center',marginTop:'-100px'}}>Feel Free to Contact us</h2>


      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqbbwbn"
            method="POST"
            className="contact-inputs">
            <input
            ref={Reference}
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
        <Footer />
        </>
    );
}
export default Contactus;