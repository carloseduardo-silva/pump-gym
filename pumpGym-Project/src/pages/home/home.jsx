import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'

import * as styles from "./styles"
import Unidades from '../../components/Unidades/Unidades'
import Modalidades from '../../components/Modalidades/modalidades'
import Planos from '../../components/Planos/Planos'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  const [navIsVisible, setnavIsVisible] = useState(null)


  useEffect(() =>{
    let header = document.querySelector('div .header');

    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting === true){
        setnavIsVisible(null)
      }else{
        setnavIsVisible(true)
      }
    })

    observer.observe(header)
    
  
  })  

  return (
    <>
    {navIsVisible ? <Nav navSetting={'white'}/> : <Nav navSetting={'transparent'}/> }

    <styles.advertisementContainer className='header'>
      <p>WELCOME TO PUMP GYM</p>
      <h1> Chegou o momento de dar um <span>PUMP</span> na sua vida.</h1>
      <styles.mobileTitle>Matricule-se já</styles.mobileTitle>
      
    </styles.advertisementContainer>
    
    <Unidades/>

    <Modalidades/>
    <Planos/>

    <Footer/>
      
    </>
  )
}

export default Home
