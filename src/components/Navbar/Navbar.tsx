import React, {useState} from 'react'; 


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';   
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

function NavbarComponent() { 

  const handleClick = () => {
    const navbarCollapseElement = document.getElementById("basic-navbar-nav") 
    if(navbarCollapseElement){
      navbarCollapseElement.className = "navbar-collapse collapse "; 
    } 
  } 
  
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']; 
const fecha = new Date(); 
const fechaHoy = (dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear());
 
  const [hoy, setFecha] = useState(fechaHoy);  
   
  return (
    <> 
      <div className='navbar-2 text-dark'>
        <div className='containerNavbar2'>
          <div className='ml-4'>{hoy}</div>
        </div>
        <div className='containerNavbar2'>
          <div className='mr-4'>Contactanos para más información:</div>
          <FontAwesomeIcon icon={faWhatsapp} className='mr-1 mt-1'/>
          <div className='container-text-1-nav-2 mr-3'>+569 5862 6642</div> 
          <FontAwesomeIcon icon={faMailBulk} className='mr-1 mt-1'/>
          <div className='container-text-2-nav-2 mr-3'>clauvalmon@gmail.com</div>
        </div>
      </div>

      <div className='containerExpandContent'></div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <div className='containerExpandNavbar'></div>
        <Container fluid> 
          <div style={{width: '70%'}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id='navbar-icon'/>
          </div>
          <div style={{width: '30%'}}>
            <a href="http://localhost:3000/proyectoVentaCasas/#"> 
              <img
                  alt=""
                  src={require("../../assets/img/AlmiranteGerken/logo_2.png")}
                  width="100"
                  height="70" 
                  />{' '}
            </a>
          </div> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <a onClick={handleClick} className='navbar-item' href="http://localhost:3000/proyectoVentaCasas/#">Inicio</a> 
              <a onClick={handleClick} className='navbar-item' href="http://localhost:3000/proyectoVentaCasas/#galeria">Galeria</a>
              <a onClick={handleClick} className='navbar-item' href="http://localhost:3000/proyectoVentaCasas/#plano">Plano</a>
              <a onClick={handleClick} className='navbar-item' href="http://localhost:3000/proyectoVentaCasas/#formulario">Ubicacion</a>  
              <a onClick={handleClick} className='navbar-item' href="http://localhost:3000/proyectoVentaCasas/#formulario">Contacto</a>  
            </Nav> 
          </Navbar.Collapse> 
        </Container>
      </Navbar> 
    </>
  );
}

export default NavbarComponent;