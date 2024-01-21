import React from 'react'
import * as styles from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

//components
import Nav from '../../components/Nav/Nav'
import { Footer } from '../../components/Footer/style'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';



const Matricula = () => {
  return (
    <>
    <Nav navSetting={"white"}></Nav>

    <styles.matriculaContainer>  
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        
      </Swiper>
      </styles.matriculaContainer>

     <Footer></Footer> 
    </>
  )
}

export default Matricula
