import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

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

  console.log(pageInfo.pageInfo)
  return (
    <>
    <Nav  active={'modalidades'}></Nav>

    <styles.modalidadeHeader>
    <h1>{pageInfo.pageInfo.title}</h1>
    </styles.modalidadeHeader>

    <styles.modalidadeContainer>


    <styles.description>
        <p> {pageInfo.pageInfo.description} </p>

        <div className='unidades'>
            <h2> DISPONÍVEL NAS UNIDADES:</h2>
            
          <Swiper
          slidesPerView={3}
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
          <Link>ARTES MARCIAIS</Link>
          <Link>CROSS TRAINING</Link>
          <Link>DANÇAS</Link>
          <Link>MUSCULAÇÃO 24H</Link>
          <Link>NUTRICIONISTA</Link>
          <Link>FUNCIONAL</Link>
          <Link>CARDIO & HIT</Link> 
    </styles.modalitiesAsideNav>

    </styles.modalidadeContainer>

        

    <Footer></Footer> 
    </>
  )
}

export default Modalidade
