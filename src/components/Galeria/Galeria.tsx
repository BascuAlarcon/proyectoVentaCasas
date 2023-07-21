import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Galeria = () => {

    const [lgShow, setLgShow] = useState(false);
    const [item, setItem] = useState(0)

    const abrirModalImg = (id: number) => {
        console.log(id);
        // las imagenes tienen que ser del mismo nombre
        // abrir el modal con el nombreImg{id}
        setItem(id);
        setLgShow(true);
    }


    return (
        <>
            <div className='containerGaleriaId' id='galeria'>Elemento oculto</div>
            <div className='carouselContainer' > 
                <div className='containerTitleCarousel'>
                    Galeria de imagenes
                </div>
                <div className="carouselImgContainer">
                    <div className="container-img-individual"><img className='img-carousel' id='0'  onClick={() => abrirModalImg(0)}  src={require(`../../assets/img/02d65003-cf63-4083-ab8c-b997cfd5bd0c.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='1'  onClick={() => abrirModalImg(1)}  src={require(`../../assets/img/5be5565d-4f5d-4630-aad8-e94df0f012cf.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='2'  onClick={() => abrirModalImg(2)}  src={require(`../../assets/img/8e82a4f1-1ad6-424d-87d7-9dd44acc3de9.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='3'  onClick={() => abrirModalImg(3)}  src={require(`../../assets/img/aa23b141-1316-418e-890d-7529982ab7f2.jpeg`)} /></div>
                </div>
                <div className="carouselImgContainer">
                    <div className="container-img-individual"><img className='img-carousel' id='4'  onClick={() => abrirModalImg(4)}  src={require(`../../assets/img/341d9f49-65ea-41e4-a135-bbf23df4258f.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='5'  onClick={() => abrirModalImg(5)}  src={require(`../../assets/img/75002a04-fa2d-4236-8161-f23d83c3f0f1.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='6'  onClick={() => abrirModalImg(6)}  src={require(`../../assets/img/b89f444c-3a90-48c9-a2a6-dc74fe7fdb1d.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='7'  onClick={() => abrirModalImg(7)}  src={require(`../../assets/img/b906b5a7-2884-4e9f-ac6c-6babe1ab8941.jpeg`)} /></div>
                </div>
                <div className="carouselImgContainer">
                    <div className="container-img-individual"><img className='img-carousel' id='8'  onClick={() => abrirModalImg(8)}  src={require(`../../assets/img/69d788cf-70ab-4aa6-9b75-63fdc262fb54.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='9'  onClick={() => abrirModalImg(9)}  src={require(`../../assets/img/27af5cc4-827b-41df-865a-03a16342fe83.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='10'  onClick={() => abrirModalImg(10)}  src={require(`../../assets/img/82e48bc8-3d77-4e68-8fca-7c3b3c739d53.jpeg`)} /></div>
                    <div className="container-img-individual"><img className='img-carousel' id='11'  onClick={() => abrirModalImg(11)}  src={require(`../../assets/img/a1fc1109-a95c-4732-911e-3e42de1a566b.jpeg`)} /></div>
                </div> 
            </div>
            <Modal show={lgShow} onHide={() => setLgShow(false)} dialogClassName="modal-90w" aria-labelledby="example-modal-sizes-title-lg">
                <Carousel showArrows={true} selectedItem={item} width={'60%'} className='carousel-img-Container'>
                    <div> 
                        <img className='img-modal-carousel' src={require(`../../assets/img/02d65003-cf63-4083-ab8c-b997cfd5bd0c.jpeg`)} /> 
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/5be5565d-4f5d-4630-aad8-e94df0f012cf.jpeg`)} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/8e82a4f1-1ad6-424d-87d7-9dd44acc3de9.jpeg`)} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/aa23b141-1316-418e-890d-7529982ab7f2.jpeg`)} />
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/341d9f49-65ea-41e4-a135-bbf23df4258f.jpeg`)} />
                        <p className="legend">Legend 5</p>
                    </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/75002a04-fa2d-4236-8161-f23d83c3f0f1.jpeg`)} />
                        <p className="legend">Legend 6</p>
                    </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/b89f444c-3a90-48c9-a2a6-dc74fe7fdb1d.jpeg`)} />
                        <p className="legend">Legend 6</p>
                    </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/b906b5a7-2884-4e9f-ac6c-6babe1ab8941.jpeg`)} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/69d788cf-70ab-4aa6-9b75-63fdc262fb54.jpeg`)} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/27af5cc4-827b-41df-865a-03a16342fe83.jpeg`)} />
                        <p className="legend">Legend 3</p>
                    </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/82e48bc8-3d77-4e68-8fca-7c3b3c739d53.jpeg`)} />
                        <p className="legend">Legend 3</p>
                    </div> 
                    <div>
                        <img className='img-modal-carousel' src={require(`../../assets/img/a1fc1109-a95c-4732-911e-3e42de1a566b.jpeg`)} />
                        <p className="legend">Legend 3</p>
                    </div> 
                </Carousel>
            </Modal>
        </>
    );
}
