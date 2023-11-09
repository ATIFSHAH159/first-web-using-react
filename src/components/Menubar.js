import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img7 from '../Images/Navlogo1.png';
import {RiAdminFill} from 'react-icons/ri';
import{AiOutlineHeart} from 'react-icons/ai';
import{BsCart3,BsSearch} from 'react-icons/bs';
import {NavLink, Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Assests/Menubar.css';
function MenuBar()
{
return (
  <div >
  <Navbar expand="lg" className="body-tertiary" style={{background: 'linear-gradient(90deg, rgba(156,220,204,1) 0%, rgba(111,170,168,1) 35%, rgba(158,204,203,1) 100%)'}} >
  <Container>
    <div>
    <Link to={"/"} style={{textDecoration:"none"}}>
    <img src={img7} alt='notfound' style={{width:"60px",height:'8vh',marginLeft:'-70px'}}></img>
    <Navbar.Brand href="#home" style={{marginLeft:"10px",fontFamily:"Serif",fontSize:"20px"}}>Maple & Pine Interiors</Navbar.Brand>
    </Link></div>


    <div className="d-flex">
  <Form className="custom-search-input me-2">
    <Form.Control
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
  </Form>
  <Button variant="outline-success"><BsSearch/></Button>
</div>


     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <NavLink to='/' className='navelement'>Home</NavLink>
        <NavLink to='/Services' className='navelement'>Services</NavLink>
        <NavDropdown title="Products" id="basic-nav-dropdown"  >
          <NavDropdown.Item><NavLink to='/Beds' className='navelement'>Beds</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink to='/Sofa' className='navelement'>Sofa's</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink to='/chairs' className='navelement'>Chairs</NavLink></NavDropdown.Item>
        </NavDropdown>
        <NavLink to='/Contactus' className='navelement'>Contact Us</NavLink>
        <NavLink to='/Aboutus' className='navelement'>About us</NavLink>
        {/* <Nav.Link href="/AdminLogin"><RiAdminFill size={"20px"}/></Nav.Link> */}
        <NavLink to='/Wishlist' className='navelement'><AiOutlineHeart size={"20px"}/></NavLink>
        <NavLink to='/Addtocart' className='navelement'><BsCart3 size={"20px"}/></NavLink>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
);
}

export default MenuBar;