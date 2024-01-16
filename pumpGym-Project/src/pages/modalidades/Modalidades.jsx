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

      <styles.modalidadesContainer>
    
        <h1>MODALIDADES</h1>

        <styles.cardContainer>

        <Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>Musculação 24H</p>
          <span>SAIBA MAIS
            </span>
          </styles.card>
        </Link>

        <Link style={{animationDelay: '200ms'}} to={'/modalidades/crossTraining'}>
          <styles.card onClick={() => setcardCrossShow(true)} IMG={crossTrainingIMG}>

          <styles.cardHoverModal isVisible={cardCrossShow}></styles.cardHoverModal>
          <p>Cross Training</p>
          <span>SAIBA MAIS
            </span>
          </styles.card>
        </Link>

        <Link style={{animationDelay: '400ms'}} to={'/modalidades/danças'}>
          <styles.card onClick={() => setcardDanceShow(true)} IMG={danceIMG}>
          <styles.cardHoverModal isVisible={cardDanceShow}></styles.cardHoverModal>
          <p>Danças</p>
          <span>SAIBA MAIS
          </span>
          </styles.card>
        </Link>
  
    </styles.cardContainer>

  </styles.modalidadesContainer>
      
      <Footer></Footer> 
      
    </>
  )
}

export default ModalidadesPage
