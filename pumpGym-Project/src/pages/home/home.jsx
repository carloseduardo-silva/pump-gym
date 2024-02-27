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

  //nav exibition toggle
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
          
          if(entry.isIntersecting === true){
     
            entry.target.children[0].classList.add('show')
            if(entry.target.children[1]){
              entry.target.children[1].classList.add('show')
            }
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


  const topFunction = () => {
    console.log('subir')
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
  }


  return (
    <>
    {navIsVisible ? <Nav navSetting={'white'}/> : <Nav navSetting={'transparent'}/> }

    <styles.advertisementContainer className='header'>
      <p>WELCOME TO PUMP GYM</p>
      <h1> Chegou o momento de dar um <span>PUMP</span> na sua vida.</h1>
      <Link to={'/pump-gym/matricula'}> <styles.mobileTitle>Matricule-se já</styles.mobileTitle></Link>
      
    </styles.advertisementContainer>
    
    <Unidades/>

    <Info/>
    <Modalidades/>
    <Planos/>
    <styles.btnGoTop onClick={() => topFunction()}  id="myBtn" title="Go to top"> 🡅 </styles.btnGoTop>
   

    <Footer/>
      
    </>
  )
}

export default Home
