import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'; 
import DB_JSON from '../../assets/texts/DB_Text.json'

const CarouselImg = styled.img` 
width: 800px;   
opacity: 0;
transition: 1s;
margin: 10px;
object-fit: 'fill';
&.loaded {
  opacity: 1;
}
@media screen and (max-width: 980px){
	width: 100%;
  margin: 0; 
}
` 

export const Plano = () => {
 
  const images = ['c1a25563-5e00-42a1-ba17-64c091e498df.jpeg', 'fab5f1c5-1060-44a4-9a72-4321ece3de91.jpeg']
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false); 
  
  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 12000);
  
    return () => {
      clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1: selectedIndex > 0;
      const nextIndex = next 
        ? condition ? selectedIndex + 1 : 0
        : condition ? selectedIndex - 1 : images.length - 1
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500) 
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false)
  }
  
  const next = () => {
    selectNewImage(selectedIndex, images)
  } 
 
  return (
    <>
      <div className='containerPlanoId' id='plano'>Elemento oculto</div>
      <div className='containerPlano'>  
        <div className='containerTitlePlano'>Plano de la casa</div>
        <div className='containerContenidoPlano'>
           
          <div className="containerPlanoTexto">
            <p className='text-white texto-plano-descripcion'>Casa nueva, moderna e independiente estilo mediterráneo. 380 metros de terreno, 140 metros construidos, 2 pisos, estacionamiento para 3 vehículos, con piscina y quincho.</p><br />
            <p className='text-white texto-plano-descripcion'>PRIMER PISO: Living comedor separados, cocina amoblada con horno, encimera, campana isla, 1 dormitorio y baño de visita completo, living con 2 ventanales salida al patio o terraza.</p><br />  
            <p className='text-white texto-plano-descripcion'>SEGUNDO PISO: 3 dormitorios, 2 baños (2 dormitorios con gran closet, dos dormitorio con ventanal salida al balcón, 1 dormitorio en suite con Walking closet y baño)</p><br />  
            <p className='text-white texto-plano-descripcion'>Número de contacot Dueño: +569 4553 5991</p><br />  
           </div> 
          <div className="containerPlanoImg">
            <CarouselImg  
              src={require(`./../../assets/img/AlmiranteGerken/${selectedImage}`)} 
              alt="Plano"  
              className={loaded ? "loaded" : ""} 
              onLoad={() => setLoaded(true)}/>   
          </div>
        </div>
      </div>
    </>
  )
}
