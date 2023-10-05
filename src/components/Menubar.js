import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img7 from '../Images/navbarlogo.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function MenuBar()
{
return (
  <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <img src={img7} style={{width:"60px",height:'8vh',marginLeft:'-70px'}}></img>
    <Navbar.Brand href="#home" style={{marginLeft:"10px",fontFamily:"Serif",fontSize:"25px"}}>Maple & Pine Interiors</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="Products" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Beds</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Sofa's
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Chairs</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Contact Us</Nav.Link>
        <Nav.Link href="#link">About us</Nav.Link>
        <Link to="/AdminLogin">
        <Button>Admin Dashboard</Button>
        </Link>
  
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default MenuBar;