import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as styles from "./styles"






//components
import Nav from '../../components/Nav/Nav'
import  Footer  from '../../components/Footer/Footer'



const ModalidadesPage = () => {

  const [crossTrainingIMG, setcrossTraingIMG] = useState('../../../public/crossTIMGblack.png')
  const [workoutIMG, setworkoutIMG] = useState('../../../public/workoutIMGblack.png')
  const [danceIMG, setdanceIMG] = useState('../../../public/danceIMGblack2.png')
  const [cardWorkoutShow, setcardWorkoutShow] = useState(false)
  const [cardCrossShow, setcardCrossShow] = useState(false)
  const [cardDanceShow, setcardDanceShow] = useState(false)
 

 


 





  return (
    <>
      <Nav  active={'modalidades'}></Nav>

      <styles.modalidadesHeader>
        <h1> MODALIDADES </h1>
      </styles.modalidadesHeader>
    

      <styles.title>
           <h1> TEMOS COMO MISSÃO AJUDAR TODOS OS NOSSOS ALUNOS A ATINGIR OS SEUS RESULTADOS, SEJA COM QUAL MODALIDADE ESCOLHER. CONFIRA: </h1>
      </styles.title>
      
      <styles.modalidadesContainer className='cardContainer'>

         <styles.cardAsideNav>
          <span>TODAS</span>
          <span>ARTES MARCIAIS</span>
          <span> CROSS TRAINING</span>
          <span> DANÇAS </span>
          <span> MUSCULAÇÃO 24H </span>
          <span> NUTRICIONISTA </span>
          <span> FUNCIONAL </span>
          <span> CARDIO & HIT </span>
          </styles.cardAsideNav> 

        <styles.cardContainer >

     
         <Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>MUSCULAÇÃO 24H</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link>
       

          <Link style={{animationDelay: '200ms'}} to={'/modalidades/crossTraining'}>
          <styles.card onClick={() => setcardCrossShow(true)} IMG={crossTrainingIMG}>
  
          <styles.cardHoverModal isVisible={cardCrossShow}></styles.cardHoverModal>
          <p>CROSS TRAINING</p>
          <span>SAIBA MAIS
            </span>
          </styles.card>
          </Link>

          <Link style={{animationDelay: '400ms'}} to={'/modalidades/danças'}>
          <styles.card onClick={() => setcardDanceShow(true)} IMG={danceIMG}>
          <styles.cardHoverModal isVisible={cardDanceShow}></styles.cardHoverModal>
          <p>DANÇAS</p>
          <span>SAIBA MAIS
          </span>
          </styles.card>
          </Link>


          <Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>ARTES MARCIAIS</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link>


           <Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>FUNCIONAL</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link>


           <Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>NUTRICIONISTA</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link>


           <Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>CARDIO & HIT</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link>
     
  
        </styles.cardContainer>

      </styles.modalidadesContainer>
      
      <Footer></Footer> 
      
    </>
  )
}

export default ModalidadesPage
