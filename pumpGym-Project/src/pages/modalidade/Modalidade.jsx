
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

//css
import * as styles from "./styles"

//components
import Nav from '../../components/Nav/Nav'
import  Footer  from '../../components/Footer/Footer'

const Modalidade = (pageInfo) => {

  const [slidesResize, setslidesResize] = useState(1)
  const [slidesView, setslidesView] = useState(3)

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

  cardContainerObserver.observe(document.querySelector('div .modalidadeContainer'))
  })

  
  return (
    <>
    <Nav  active={'modalidades'}></Nav>

    <styles.modalidadeHeader>
    <h1>{pageInfo.pageInfo.title}</h1>
    </styles.modalidadeHeader>

    <styles.modalidadeContainer className='modalidadeContainer'>


    <styles.description>
        <p> {pageInfo.pageInfo.description} </p>

        <div className='unidades'>
            <h2> DISPONÍVEL NAS UNIDADES:</h2>
            
          <Swiper style={{height:'520px', maxWidth:'91vw', marginTop:'-3rem'}}
          slidesPerView={slidesView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide> 
          <Link  to={'/unidades/1'}>
          <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 1 24H</p>
          </styles.cardUnities>
          </Link>
          </SwiperSlide>

          <SwiperSlide> <Link style={{animationDelay: '200ms'}} to={'/unidades/2'}>
            <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 2 24H</p>
            </styles.cardUnities>
            </Link>
          </SwiperSlide>

          <SwiperSlide><Link style={{animationDelay: '400ms'}} to={'/unidades/3'}>
          <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 3 24H</p>
            </styles.cardUnities>
          </Link>
          </SwiperSlide>


          <SwiperSlide><Link  to={'/unidades/4'}>
          <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 4 24H</p>
            </styles.cardUnities>
          </Link>
          </SwiperSlide>


          <SwiperSlide> <Link  to={'/unidades/5'}>
              <styles.cardUnities> 
                <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

                <p> Unidade 5 24H</p>
              </styles.cardUnities>
            </Link>
            </SwiperSlide>


          <SwiperSlide> <Link  to={'/unidades/6'}>
          <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 6 24H</p>
            </styles.cardUnities>
          </Link></SwiperSlide>


          <SwiperSlide> <Link  to={'/unidades/7'}>
          <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 7 24H</p>
            </styles.cardUnities>
            </Link></SwiperSlide>
        </Swiper>

        </div>
    </styles.description>

    <styles.modalitiesAsideNav>
            <h2> + MODALIDADES</h2>
          <Link to={'/pump-gym/modalidades/artes-marciais'}>ARTES MARCIAIS</Link>
          <Link to={'/pump-gym/modalidades/crossTraining'}>CROSS TRAINING</Link>
          <Link to={'/pump-gym/modalidades/danças'}>DANÇAS</Link>
          <Link to={'/pump-gym/modalidades/musculação'}>MUSCULAÇÃO 24H</Link>
          <Link to={'/pump-gym/modalidades/nutricionista'}>NUTRICIONISTA</Link>
          <Link to={'/pump-gym/modalidades/funcional'}>FUNCIONAL</Link>
          <Link to={'/pump-gym/modalidades/cardio-hit'}>CARDIO & HIT</Link> 
    </styles.modalitiesAsideNav>

    </styles.modalidadeContainer>

        

    <Footer></Footer> 
    </>
  )
}

export default Modalidade
