import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Inicio = () => {
  return (
    <div className='inicioContainer' id="inicio">
      <div className='containerInicioId' id='inicio'>Elemento oculto</div>
      <img className='img-inicio' src={require(`../../assets/img/asdfghj.jpg`)} />
      <div className="textoInicio">Almirante Gerken 934 Lote n° 20</div>
      <a href={'https://wa.me/+56958626642'}><FontAwesomeIcon icon={faWhatsapp} className='btn-wsp'/></a>
    </div>
  )
}
