import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {

  const handleClick = () => {
    const navbarCollapseElement = document.getElementById("basic-navbar-nav")
    const navbarCollapseElement2 = document.getElementById("navbar-icon")
    if(navbarCollapseElement){
      navbarCollapseElement.className = "navbar-collapse collapse "; 
    }
    console.log('test');
  }



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" id='navbar-icon'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleClick} href="#inicio">Inicio</Nav.Link>
            <Nav.Link onClick={handleClick} href="#galeria">Galeria</Nav.Link> 
            <Nav.Link onClick={handleClick} href="#plano">Plano</Nav.Link> 
            <Nav.Link onClick={handleClick} href="#ubicacion">Ubicacion</Nav.Link> 
            <Nav.Link onClick={handleClick} className='navFormulario' href="#formulario">Contacto</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;