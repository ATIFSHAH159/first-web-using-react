import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img7 from '../Images/Navlogo1.png';
import {RiAdminFill} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Assests/Menubar.css';
function MenuBar()
{
return (
  <div>
  <Navbar expand="lg" className="body-tertiary" style={{background: 'linear-gradient(90deg, rgba(156,220,204,1) 0%, rgba(111,170,168,1) 35%, rgba(158,204,203,1) 100%)'}} >
  <Container>
    <div>
    <Link to={"/"} style={{textDecoration:"none"}}>
    <img src={img7} style={{width:"60px",height:'8vh',marginLeft:'-70px'}}></img>
    <Navbar.Brand href="#home" style={{marginLeft:"10px",fontFamily:"Serif",fontSize:"25px"}}>Maple & Pine Interiors</Navbar.Brand>
    </Link></div>
    <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Products" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Beds">Beds</NavDropdown.Item>
          <NavDropdown.Item href="/Sofa">
            Sofa's
          </NavDropdown.Item>
          <NavDropdown.Item href="/chairs">Chairs</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/Contactus">Contact Us</Nav.Link>
        <Nav.Link href="/Aboutus">About us</Nav.Link>
        <Nav.Link href="/AdminLogin"><RiAdminFill size={"20px"}/></Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
);
}

export default MenuBar;