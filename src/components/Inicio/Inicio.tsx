import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Inicio = () => {
  return (
    <div className='inicioContainer' id="inicio">
      <div className='containerInicioId' id='inicio'>Elemento oculto</div>
      <img className='img-inicio' src={require(`../../assets/img/AlmiranteGerken/img_portada_03.jpg`)} /> 
      <a href={'https://wa.me/+56945535991'}>
        <FontAwesomeIcon icon={faWhatsapp} className='btn-wsp'/>
      </a>
    </div>
  )
}
