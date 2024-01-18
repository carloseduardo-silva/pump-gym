import React, { useEffect } from 'react'
import * as styles from "./styles"
import { useState } from 'react'
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Modalidades = () => {


  const [crossTrainingIMG, setcrossTraingIMG] = useState('../../../public/crossTIMGblack.png')
  const [workoutIMG, setworkoutIMG] = useState('../../../public/workoutIMGblack.png')
  const [danceIMG, setdanceIMG] = useState('../../../public/danceIMGblack2.png')
  const [cardWorkoutShow, setcardWorkoutShow] = useState(false)
  const [cardCrossShow, setcardCrossShow] = useState(false)
  const [cardDanceShow, setcardDanceShow] = useState(false)
  const [slidesView, setslidesView] = useState(1)

 
   

    useEffect(() =>{

        let observer = new IntersectionObserver((entries) =>{
        console.log(entries[0].target.clientWidth)

        if(entries[0].target.clientWidth > 1000){
          setslidesView(3)
        }else{
          setslidesView(1)
        }
      })
      
      observer.observe(document.querySelector('div'))
  })
    
    



  return (
    <>
      <styles.modalidadesContainer>
    
        <h1>MODALIDADES</h1>

        <styles.cardContainer>

          <Swiper
          slidesPerView={slidesView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide> <Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>Musculação 24H</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link>
          </SwiperSlide>

          <SwiperSlide> <Link style={{animationDelay: '200ms'}} to={'/modalidades/crossTraining'}>
          <styles.card onClick={() => setcardCrossShow(true)} IMG={crossTrainingIMG}>
  
          <styles.cardHoverModal isVisible={cardCrossShow}></styles.cardHoverModal>
          <p>Cross Training</p>
          <span>SAIBA MAIS
            </span>
          </styles.card>
          </Link></SwiperSlide>

          <SwiperSlide><Link style={{animationDelay: '400ms'}} to={'/modalidades/danças'}>
          <styles.card onClick={() => setcardDanceShow(true)} IMG={danceIMG}>
          <styles.cardHoverModal isVisible={cardDanceShow}></styles.cardHoverModal>
          <p>Danças</p>
          <span>SAIBA MAIS
          </span>
          </styles.card>
          </Link></SwiperSlide>


          <SwiperSlide><Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>Musculação 24H</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link></SwiperSlide>


          <SwiperSlide> <Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>Musculação 24H</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link></SwiperSlide>


          <SwiperSlide> <Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>Musculação 24H</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link></SwiperSlide>


          <SwiperSlide> <Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>Musculação 24H</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link></SwiperSlide>
        </Swiper>

    

       

      
        </styles.cardContainer>

        <Link> VER MAIS +</Link>
      </styles.modalidadesContainer>
    </>
  )
}

export default Modalidades
