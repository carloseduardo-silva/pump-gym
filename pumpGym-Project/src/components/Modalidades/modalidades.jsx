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


  const [crossTrainingIMG, setcrossTraingIMG] = useState('./crossTIMGblack.png')
  const [workoutIMG, setworkoutIMG] = useState('./workoutIMGblack.png')
  const [danceIMG, setdanceIMG] = useState('./danceIMGblack2.png')
  const [lutaIMG, setlutaIMG] = useState('./lutaIMGblack.png')
  const [funcionalIMG, setfuncionalIMG] = useState('./funcionalIMGblack.png')
  const [nutriIMG, setnutriIMG] = useState('./nutriIMGblack.png')
  const [cardioIMG, setcardioIMG] = useState('./cardioIMGblack.png')
  const [cardWorkoutShow, setcardWorkoutShow] = useState(false)
  const [cardCrossShow, setcardCrossShow] = useState(false)
  const [cardDanceShow, setcardDanceShow] = useState(false)
  const [cardlutaShow, setcardlutaShow] = useState(false)
  const [cardfuncionalShow, setcardfuncionalShow] = useState(false)
  const [cardnutriShow, setcardnutriShow] = useState(false)
  const [cardcardioShow, setcardcardioShow] = useState(false)
  const [slidesView, setslidesView] = useState(1)
  const [slidesResize, setslidesResize] = useState(1)
 
   

    useEffect(() =>{

        let observer = new IntersectionObserver((entries) =>{
        

        if(entries[0].target.clientWidth > 1000){
          setslidesView(3)
        }else{
          setslidesView(1)
        }
      })
      
      observer.observe(document.querySelector('div'))
  }, [slidesResize])

  useEffect(() =>{
    
    let cardContainerObserver = new IntersectionObserver((entries)=>{

      if(entries[0].isIntersecting){
        setslidesResize(slidesResize+1)
      }else{
        setslidesResize(slidesResize-1)
      }

    })

    cardContainerObserver.observe(document.querySelector('div .cardContainer'))
  })

    
    



  return (
    <>
      <styles.modalidadesContainer >
    
        <h1>MODALIDADES</h1>

        <styles.cardContainer className='cardContainer hidden'>

          <Swiper
          slidesPerView={slidesView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide> <Link  to={'/pump-gym/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>Musculação 24H</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link>
          </SwiperSlide>

          <SwiperSlide> <Link style={{animationDelay: '200ms'}} to={'/pump-gym/modalidades/crossTraining'}>
          <styles.card onClick={() => setcardCrossShow(true)} IMG={crossTrainingIMG}>
  
          <styles.cardHoverModal isVisible={cardCrossShow}></styles.cardHoverModal>
          <p>Cross Training</p>
          <span>SAIBA MAIS
            </span>
          </styles.card>
          </Link></SwiperSlide>

          <SwiperSlide><Link style={{animationDelay: '400ms'}} to={'/pump-gym/modalidades/danças'}>
          <styles.card onClick={() => setcardDanceShow(true)} IMG={danceIMG}>
          <styles.cardHoverModal isVisible={cardDanceShow}></styles.cardHoverModal>
          <p>Danças</p>
          <span>SAIBA MAIS
          </span>
          </styles.card>
          </Link></SwiperSlide>


          <SwiperSlide><Link  to={'/pump-gym/modalidades/cardio-hit'}>


          <styles.card onMouseEnter={() => setcardcardioShow(true)} IMG={cardioIMG}>
          
          <styles.cardHoverModal isVisible={cardcardioShow}></styles.cardHoverModal>
          <p>CARDIO & HIT</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link></SwiperSlide>


          <SwiperSlide> <Link  to={'/pump-gym/modalidades/artes-marciais'}>
          <styles.card onMouseEnter={() => setcardlutaShow(true)} IMG={lutaIMG}>
          
          <styles.cardHoverModal isVisible={cardlutaShow}></styles.cardHoverModal>
          <p>ARTES MARCIAIS</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link></SwiperSlide>


          <SwiperSlide> <Link  to={'/pump-gym/modalidades/nutricionista'}>
          <styles.card onMouseEnter={() => setcardnutriShow(true)} IMG={nutriIMG}>
          
          <styles.cardHoverModal isVisible={cardnutriShow}></styles.cardHoverModal>
          <p>NUTRICIONISTA</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link></SwiperSlide>


          <SwiperSlide> <Link  to={'/pump-gym/modalidades/funcional'}>
          <styles.card onMouseEnter={() => setcardfuncionalShow(true)} IMG={funcionalIMG}>
          
          <styles.cardHoverModal isVisible={cardfuncionalShow}></styles.cardHoverModal>
          <p>FUNCIONAL</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link></SwiperSlide>
        </Swiper>

    

       

      
        </styles.cardContainer>

        <Link to={'/pump-gym/modalidades'}> VER MAIS +</Link>
      </styles.modalidadesContainer>
    </>
  )
}

export default Modalidades
