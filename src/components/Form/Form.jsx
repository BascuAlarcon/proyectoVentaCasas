import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form'; 
import emailjs from '@emailjs/browser';
import { Button, Modal } from 'react-bootstrap';

export const Form = () => { 

  const form = useRef();

  const [name, setName ] = useState('')
  const [rut, setRut ] = useState('')
  const [celular, setCelular ] = useState('')
  const [mail, setMail ] = useState('')
  const [contacto, setContacto ] = useState('')

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
            console.log(result.text);
            document.getElementById('inputName').value = '';
            document.getElementById('inputRut').value = '';
            document.getElementById('inputCelular').value = '';
            document.getElementById('inputMail').value = '';
            document.getElementById('inputMedioContacto').value = 'none';
            document.getElementById('inputConsultas').value = '';
            handleShow();
        }, (error) => {
            console.log(error.text);
        }); 
    }
  };

  const validarFormulario = () => {
    // OBTENER VALORES
    var name = document.getElementById('inputName').value 
    var rut = document.getElementById('inputRut').value
    var celular = document.getElementById('inputCelular').value
    var mail = document.getElementById('inputMail').value
    var medioContacto = document.getElementById('inputMedioContacto').value
     
    // HACER VALIDACIONES 

    if(name === '' || rut  === '' || celular  === '' || mail  === '' || medioContacto === 'none'){
      if (name === '' ? setName('Este campo es obligatorio'): setName(''));  
      if (rut === '' ? setRut('Este campo es obligatorio'): setRut(''));  
      if (celular === '' ? setCelular('Este campo es obligatorio'): setCelular(''));  
      if (mail === '' ? setMail('Este campo es obligatorio'): setMail(''));  
      if (medioContacto === 'none' ? setContacto('Este campo es obligatorio'): setContacto(''));  
      return -1
    }else{
      setName('')
      setRut('')
      setCelular('')
      setMail('')
      setContacto('')
      return 1
    }  
 
  }

  return (
    <>
      <div className='containerFormularioId' id='formulario'>Elemento oculto</div>
      <div className='containerForm' >
        <div className='containerFormImg'>
          <img className='img-form' src={require(`../../assets/img/sushi.jpg`)} alt="" />
        </div>
        <div className='containerFormForm'>
          <div className='containerFormFormForm'>
          <h1 className='titleForm text-white'>Formulario de Contacto</h1> 
            <form onSubmit={sendEmail} ref={form} > 
              <div className='containerInput'>
                <input className='inputForm' id="inputName" type='text' name="name" placeholder='Nombre Completo'  /> 
                <span className='textoValidacion' id="spanName">{name}</span>
              </div> 
              <div className='containerInput'>
                <input className='inputForm' id="inputRut" type='text' name="rut" placeholder='Rut' /> 
                <span className='textoValidacion'>{rut}</span>
              </div>
              <div className='containerInput'>
                <input className='inputForm' id="inputCelular" type='text' name="celular"  placeholder='Celular'  /> 
                <span className='textoValidacion'>{celular}</span>
              </div>
              <div className='containerInput'>
                <input className='inputForm' id="inputMail" type='text' name="mail" placeholder='Correo Electronico'   /> 
                <span className='textoValidacion'>{mail}</span>
              </div>
              <div className='containerInput'>
                <select className='inputSelect' name='contacto' id="inputMedioContacto">
                  <option value="none">Medio de Contacto</option>
                  <option value="Celular">Celular</option>
                  <option value="Mail">Mail</option>
                  <option value="Whatsapp">Whatsapp</option>
                </select> 
              <span className='textoValidacion'>{contacto}</span>
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
