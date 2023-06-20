import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Galeria = () => {
  return (
    <div className='carouselContainer' id="galeria"> 
      <Carousel showArrows={true} width={'50%'}>
          <div className='carouselContainerImg'>
              <img className='img-carousel' src={require(`../../assets/img/20230503_122711.jpg`)} />
              <p className="legend">Legend 1</p>
          </div>
          <div className='carouselContainerImg'>
              <img className='img-carousel' src={require(`../../assets/img/20230503_122711.jpg`)} />
              <p className="legend">Legend 2</p>
          </div>
          <div className='carouselContainerImg'>
              <img className='img-carousel' src={require(`../../assets/img/20230503_122711.jpg`)} />
              <p className="legend">Legend 3</p>
          </div>
          <div className='carouselContainerImg'>
              <img className='img-carousel' src={require(`../../assets/img/20230503_122711.jpg`)} />
              <p className="legend">Legend 4</p>
          </div>
          <div className='carouselContainerImg'>
              <img className='img-carousel' src={require(`../../assets/img/20230503_122711.jpg`)} />
              <p className="legend">Legend 5</p>
          </div>
          <div className='carouselContainerImg'>
              <img className='img-carousel' src={require(`../../assets/img/20230503_122711.jpg`)} />
              <p className="legend">Legend 6</p>
          </div>
          <div className='carouselContainerImg'>
              <img className='img-carousel' src={require(`../../assets/img/20230503_122711.jpg`)} />
              <p className="legend">Legend 1</p>
          </div> 
      </Carousel>
    </div>
);
}
