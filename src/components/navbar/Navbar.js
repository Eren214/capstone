import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  return (
    <section>
    <div className="top-navbar">
    <p>WELCOME TO OUR SHOP</p>
    <div className="icons">
      <a id="login-icon" href="login.html"><img  src="register.png" alt="" width="18px"/>Login</a>
        <a href="register.html"><img  src="register.png" alt="" width="18px"/>Register</a>
    </div>
  </div>
    <Navbar bg="light" expand="lg">
      <Container style={{ maxHeight: '100px',backgroundColor:"yellow" }} fluid>
        <Link to='/'><Navbar.Brand>theHAPPY<br/>READER</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="my-lg-0" navbarScroll>
           <Link to='/shop'> <NavDropdown title="SHOP" id="shop">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown></Link>
            <Nav.Link id="blog" href="">BLOG</Nav.Link>
            <Link to='/contact-us' id="contact">CONTACT</Link>
          <NavDropdown title="ABOUT US" id="about-us">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
           
          <div id="cart" className='d-flex ms-auto'>
            <p><span id="peso">&#x20B1;</span>0.00</p>|
          <FaShoppingCart id="shopping-cart" /> 
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default Navbars;