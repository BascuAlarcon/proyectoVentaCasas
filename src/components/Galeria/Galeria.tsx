import React, { useState, useContext } from 'react' 

import { Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Galeria = () => { 

    const [lgShow, setLgShow] = useState(false);
    const [item, setItem] = useState(0)

    const abrirModalImg = (id: number) => {
        console.log(id);  
        setItem(id);
        setLgShow(true);
    }


    return ( 
        <>
            <div className='containerGaleriaId' id='galeria'>Elemento oculto</div>
            <div className='carousel-mobile'> 
                <div className='containerTitleCarousel'>
                    Galeria de imagenes
                </div>
                <Carousel showArrows={true} selectedItem={item} width={'100%'} className='carousel-img-Container' swipeable={true}>
                    <div> 
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_31.jpeg`)} /> 
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_26.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_27.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_34.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_21.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_02.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_03.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_05.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_06.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_07.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_22.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_23.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_24.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_25.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_32.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_19.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_29.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_08.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_16.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_33.jpeg`)} />
                     </div> 
                </Carousel> 
            </div>  
            <div className='carouselContainer' > 
                <div className='containerTitleCarousel'>
                    Galeria de imagenes
                </div>
                <div className="carouselImgContainer">
                    <div className="container-img-individual"><img className='img-carousel' id='0'  onClick={() => abrirModalImg(0)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_31.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='1'  onClick={() => abrirModalImg(1)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_26.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='2'  onClick={() => abrirModalImg(2)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_27.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='3'  onClick={() => abrirModalImg(3)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_34.jpeg`)} /></div>
                </div>
                <div className="carouselImgContainer">
                    <div className="container-img-individual"><img className='img-carousel' id='4'  onClick={() => abrirModalImg(4)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_21.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='5'  onClick={() => abrirModalImg(5)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_02.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='6'  onClick={() => abrirModalImg(6)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_03.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='7'  onClick={() => abrirModalImg(7)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_05.jpeg`)} /></div>
                </div>
                <div className="carouselImgContainer">
                    <div className="container-img-individual"><img className='img-carousel' id='8'  onClick={() => abrirModalImg(8)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_06.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='9'  onClick={() => abrirModalImg(9)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_07.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='10'  onClick={() => abrirModalImg(10)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_22.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='11'  onClick={() => abrirModalImg(11)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_23.jpeg`)} /></div>
                </div> 
                <div className="carouselImgContainer">
                    <div className="container-img-individual"><img className='img-carousel' id='12'  onClick={() => abrirModalImg(12)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_24.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='13'  onClick={() => abrirModalImg(13)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_25.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='14'  onClick={() => abrirModalImg(14)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_32.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='15'  onClick={() => abrirModalImg(15)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_19.jpeg`)} /></div>
                </div> 
                <div className="carouselImgContainer">
                    <div className="container-img-individual"><img className='img-carousel' id='1'  onClick={() => abrirModalImg(1)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_29.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='2'  onClick={() => abrirModalImg(2)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_08.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='3'  onClick={() => abrirModalImg(3)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_16.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='4'  onClick={() => abrirModalImg(4)}  src={require(`../../assets/img/AlmiranteGerken/img_galeria_33.jpeg`)} /></div>
                </div> 
            </div>
            <Modal show={lgShow} centered onHide={() => setLgShow(false)} dialogClassName="modal-90w" aria-labelledby="example-modal-sizes-title-lg">
                <Carousel showArrows={true} selectedItem={item} width={'40%'} className='carousel-img-Container' >
                    <div> 
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_31.jpeg`)} /> 
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_26.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_27.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_34.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_21.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_02.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_03.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_05.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_06.jpeg`)} />
                     </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_07.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_22.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_23.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_24.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_25.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_32.jpeg`)} />
                     </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/AlmiranteGerken/img_galeria_19.jpeg`)} />
                     </div>  
                </Carousel>
            </Modal>
        </>
    );
}
