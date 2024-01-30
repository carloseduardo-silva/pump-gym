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
  const [fightIMG, setfightIMG] = useState('../../../public/lutaIMGblack.png')
  const [funcionalIMG, setfuncionalIMG] = useState('../../../public/funcionalIMGblack.png')
  const [nutriIMG, setnutriIMG] = useState('../../../public/nutriIMGblack.png')
  const [cardioIMG, setcardioIMG] = useState('../../../public/cardioIMGblack.png')
  const [cardWorkoutShow, setcardWorkoutShow] = useState(false)
  const [cardCrossShow, setcardCrossShow] = useState(false)
  const [cardDanceShow, setcardDanceShow] = useState(false)
  const [cardfightShow, setcardfightShow] = useState(false)
  const [cardfuncionalShow, setcardfuncionalShow] = useState(false)
  const [cardnutriShow, setcardnutriShow] = useState(false)
  const [cardcardioShow, setcardcardioShow] = useState(false)

  const [WorkoutShow, setWorkoutShow] = useState(true)
  const [CrossShow, setCrossShow] = useState(true)
  const [DanceShow, setDanceShow] = useState(true)
  const [fightShow, setfightShow] = useState(true)
  const [funcionalShow, setfuncionalShow] = useState(true)
  const [nutriShow, setnutriShow] = useState(true)
  const [cardioShow, setcardioShow] = useState(true)


 
  const showAllModalities = (activeEl) =>{


    setWorkoutShow(true)
    setCrossShow(true)
    setDanceShow(true)
    setfightShow(true)
    setnutriShow(true)
    setfuncionalShow(true)
    setcardioShow(true)
    cleanActiveClasses()
    activeEl.classList.add('active')
  }

  const cleanActiveClasses = () =>{
    const navActiveItems = document.querySelectorAll('.active') 
    
    navActiveItems.forEach((navItem) => navItem.classList.remove('active'))

  }

  const showModalitie = (modalitieEl) =>{

    cleanActiveClasses()
    modalitieEl.classList.add('active')

    switch(modalitieEl.innerHTML){

      case "ARTES MARCIAIS":
        setWorkoutShow(false)
        setCrossShow(false)
        setDanceShow(false)
        setfightShow(true)
        setnutriShow(false)
        setfuncionalShow(false)
        setcardioShow(false)
         break;

      case "CROSS TRAINING":
        setWorkoutShow(false)
        setCrossShow(true)
        setDanceShow(false)
        setfightShow(false)
        setnutriShow(false)
        setfuncionalShow(false)
        setcardioShow(false)
        break;
    

      case "DANÇAS":
        setWorkoutShow(false)
        setCrossShow(false)
        setDanceShow(true)
        setfightShow(false)
        setnutriShow(false)
        setfuncionalShow(false)
        setcardioShow(false)
        break;

      case "MUSCULAÇÃO 24H":
        setWorkoutShow(true)
        setCrossShow(false)
        setDanceShow(false)
        setfightShow(false)
        setnutriShow(false)
        setfuncionalShow(false)
        setcardioShow(false)
        break;

      case "NUTRICIONISTA":
        setWorkoutShow(false)
        setCrossShow(false)
        setDanceShow(false)
        setfightShow(false)
        setnutriShow(true)
        setfuncionalShow(false)
        setcardioShow(false)
        break;

      case "FUNCIONAL":
        setWorkoutShow(false)
        setCrossShow(false)
        setDanceShow(false)
        setfightShow(false)
        setnutriShow(false)
        setfuncionalShow(true)
        setcardioShow(false)
        break;

      case "CARDIO &amp; HIT":
        setWorkoutShow(false)
        setCrossShow(false)
        setDanceShow(false)
        setfightShow(false)
        setnutriShow(false)
        setfuncionalShow(false)
        setcardioShow(true)
        break;
   

    }

  }





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
          <span className='active' onClick={(e) => showAllModalities(e.target)}> TODAS</span>
          <span onClick={(e) => showModalitie(e.target)} >ARTES MARCIAIS</span>
          <span onClick={(e) => showModalitie(e.target)}>CROSS TRAINING</span>
          <span onClick={(e) => showModalitie(e.target)}>DANÇAS</span>
          <span onClick={(e) => showModalitie(e.target)}>MUSCULAÇÃO 24H</span>
          <span onClick={(e) => showModalitie(e.target)}>NUTRICIONISTA</span>
          <span onClick={(e) => showModalitie(e.target)}>FUNCIONAL</span>
          <span onClick={(e) => showModalitie(e.target)}>CARDIO & HIT</span>
          </styles.cardAsideNav> 

        <styles.cardContainer >

     
           {WorkoutShow && <Link  to={'/modalidades/musculação'}>
          <styles.card onMouseEnter={() => setcardWorkoutShow(true)} IMG={workoutIMG}>
          
          <styles.cardHoverModal isVisible={cardWorkoutShow}></styles.cardHoverModal>
          <p>MUSCULAÇÃO 24H</p>
          <span>SAIBA MAIS
             </span>
            </styles.card></Link>}
       

          {CrossShow && <Link style={{animationDelay: '200ms'}} to={'/modalidades/crossTraining'}>
          <styles.card onClick={() => setcardCrossShow(true)} IMG={crossTrainingIMG}>
  
          <styles.cardHoverModal isVisible={cardCrossShow}></styles.cardHoverModal>
          <p>CROSS TRAINING</p>
          <span>SAIBA MAIS
            </span>
          </styles.card>
          </Link>}

          {DanceShow && <Link style={{animationDelay: '400ms'}} to={'/modalidades/danças'}>
          <styles.card onClick={() => setcardDanceShow(true)} IMG={danceIMG}>
          <styles.cardHoverModal isVisible={cardDanceShow}></styles.cardHoverModal>
          <p>DANÇAS</p>
          <span>SAIBA MAIS
          </span>
          </styles.card>
          </Link>}


          {fightShow &&<Link style={{animationDelay: '600ms'}}  to={'/modalidades/artes-marciais'}>
          <styles.card onMouseEnter={() => setcardfightShow(true)} IMG={fightIMG}>
          
          <styles.cardHoverModal isVisible={cardfightShow}></styles.cardHoverModal>
          <p>ARTES MARCIAIS</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link>}


           {funcionalShow &&<Link style={{animationDelay: '800ms'}}  to={'/modalidades/funcional'}>
            <styles.card style={{backgroundPosition:'top'}} onMouseEnter={() => setcardfuncionalShow(true)} IMG={funcionalIMG}>
          
            <styles.cardHoverModal isVisible={cardfuncionalShow}></styles.cardHoverModal>
            <p>FUNCIONAL</p>
            <span>SAIBA MAIS
             </span>
            </styles.card>
            </Link>}


           {nutriShow && <Link style={{animationDelay: '1000ms'}}  to={'/modalidades/nutricionista'}>
          <styles.card onMouseEnter={() => setcardnutriShow(true)} IMG={nutriIMG}>
          
          <styles.cardHoverModal isVisible={cardnutriShow}></styles.cardHoverModal>
          <p>NUTRICIONISTA</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link>}


           {cardioShow && <Link style={{animationDelay: '1100ms'}}  to={'/modalidades/cardio-hit'}>
          <styles.card onMouseEnter={() => setcardcardioShow(true)} IMG={cardioIMG}>
          
          <styles.cardHoverModal isVisible={cardcardioShow}></styles.cardHoverModal>
          <p>CARDIO & HIT</p>
          <span>SAIBA MAIS
             </span>
          </styles.card></Link>}
     
  
        </styles.cardContainer>

      </styles.modalidadesContainer>
      
      <Footer></Footer> 
      
    </>
  )
}

export default ModalidadesPage
