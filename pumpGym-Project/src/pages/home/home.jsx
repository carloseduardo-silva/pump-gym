import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'

import * as styles from "./styles"
import Unidades from '../../components/Unidades/Unidades'
import Info from '../../components/Info/Info'
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
  

  useEffect(() =>{
    let sections = document.querySelectorAll('section');

    let observerHome = new IntersectionObserver((entries) => {
        
        entries.forEach(entry =>{
          console.log()
          if(entry.isIntersecting === true){
         
            entry.target.children[1].classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }

        })
    })

  
    sections.forEach((section) => {
      observerHome.observe(section)
    })
  
  })  



  return (
    <>
    {navIsVisible ? <Nav navSetting={'white'}/> : <Nav navSetting={'transparent'}/> }

    <styles.advertisementContainer className='header'>
      <p>WELCOME TO PUMP GYM</p>
      <h1> Chegou o momento de dar um <span>PUMP</span> na sua vida.</h1>
      <Link to={'/matricula'}> <styles.mobileTitle>Matricule-se já</styles.mobileTitle></Link>
      
    </styles.advertisementContainer>
    
    <Unidades/>

    <Info/>
    <Modalidades/>
    <Planos/>

    <Footer/>
      
    </>
  )
}

export default Home
