import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form'; 
import emailjs from '@emailjs/browser';
import { Button, Modal } from 'react-bootstrap';
import MapboxMap from '../map/map'


export const Form = () => { 

  const form = useRef();

  const [name, setName ] = useState('')  
  const [medio, setMedio ] = useState('')
  const [contacto, setContacto ] = useState('')
  const [contactoState, setContactoState ] = useState(true)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // SEND MAIL 
  const sendEmail = (e) => { 
    e.preventDefault(); 

    // VALIDAR FORMULARIO 
    var resultadoValidaciones = validarFormulario(); 

    // ENVIAR MAIL   
    if(resultadoValidaciones !== -1){
      emailjs.sendForm('service_n9cspm7', 'template_4k54ekm', form.current, 'fx28VXVHE-VvdzaSQ')
        .then((result) => { 
            document.getElementById('inputName').value = '';   
            document.getElementById('inputMedio').value = '';
            document.getElementById('inputMedioContacto').value = 'none';
            document.getElementById('inputConsultas').value = '';
            handleShow();
            activarContacto();
        }, (error) => {
            console.log(error.text);
        }); 
    }
  };

  const activarContacto = () => {
    var medioContacto = document.getElementById('inputMedioContacto').value
    if(medioContacto === 'none'){
      setContactoState(true);
    }else{
      setContactoState(false);
    } 
  }

  const validarFormulario = () => {
    // OBTENER VALORES
    var name = document.getElementById('inputName').value  
    var medio = document.getElementById('inputMedio').value 
    var medioContacto = document.getElementById('inputMedioContacto').value
     
    // HACER VALIDACIONES 

    if(medioContacto === 'Mail'){
      var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;  
      if(!validEmail.test(medio) ){  
        setMedio('Formato del correo incorrecto');
        return -1;
      }
    }

    // if(medioContacto === 'Celular'){
    //   var validCelular = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
    //   if(!validCelular.test(medio) ){  
    //     setMedio('Formato del celular incorrecto');
    //     return -1;
    //   }
    // }
      
    if(name === '' || medio  === '' || medioContacto === 'none'){
      if (name === '' ? setName('Este campo es obligatorio'): setName(''));   
      if (medio === '' ? setMedio('Este campo es obligatorio'): setMedio(''));   
      if (medioContacto === 'none' ? setContacto('Este campo es obligatorio'): setContacto(''));   
      return -1
    } 

    setName('') 
    setMedio('') 
    setContacto('')  
    return 1
 
  }

  return (
    <>
      <div className='containerFormularioId' id='formulario'>Elemento oculto</div>
      <div className='containerForm' >
        <div className="containerUbicacionImg">
            <MapboxMap/>
          </div>
        <div className='containerFormForm'>
          <div className='containerFormFormForm'>
           <h1 className='text-formulario-title'>Formulario de Contacto</h1> 
            <form onSubmit={sendEmail} ref={form} > 
              <div className='containerInput'>
                <input className='inputForm' id="inputName" type='text' name="name" placeholder='Nombre Completo'  /> 
                <span className='textoValidacion' id="spanName">{name}</span>
              </div>  
              <div className='containerInput'>
                <select className='inputSelect' name='contacto' id="inputMedioContacto" onChange={activarContacto}>
                  <option value="none">Ingrese Canal de Contacto</option>
                  <option value="Celular">Celular</option>
                  <option value="Mail">Mail</option>
                  <option value="Whatsapp">Whatsapp</option>
                </select> 
                <span className='textoValidacion'>{contacto}</span>
              </div> 
              <div className='containerInput'>
                <input className='inputForm inputContacto' disabled={contactoState} id="inputMedio" type='text' name="medio"  placeholder='Medio de Contacto'  /> 
                <span className='textoValidacion'>{medio}</span>
              </div> 
              <div className="containerInput">
                <textarea className='inputFormConsulta' id='inputConsultas' name="consultas" rows={5} cols={64} placeholder='Ingrese sus dudas o consultas'></textarea>
              </div>
            <div className='containerButtonEnviar'>
              <input type="submit" />
            </div>
            </form>
          </div> 
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario Enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>El formulario ha sido enviado. En la brevedad será contactado.</Modal.Body>
        <Modal.Footer> 
          <Button variant="primary" onClick={handleClose}>
            Acceptar
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
