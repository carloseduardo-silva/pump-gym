import React, { useEffect, useState } from 'react'
import {Link}  from "react-router-dom"
import * as styles from "./styles"

const Nav = (active) => {

  const [isVisible, setisVisible] = useState(false)
  const [alunoActive, setAlunoActive] = useState(false)
  const [unidadesActive, setUnidadesActive] = useState(false)
  const [modalidadesActive, setModalidadesActive] = useState(false)
  const [contatoActive, setContatoActive] = useState(false)
  const [linkColor, setlinkColor] = useState('white')
  const [NavPosition, setNavPosition] = useState('absolute')


 useEffect(() =>{
  switch (active.active){
    case 'aluno':
       setAlunoActive(true)
       break;

    case 'contato':
      setContatoActive(true)
     break;

    case 'modalidades':
       setModalidadesActive(true)
       break;

    case 'unidades':
      setUnidadesActive(true)
       break;
    

      
  }})

  useEffect(() =>{
    const nav = document.querySelector('div nav')
    switch (active.navSetting){
      case 'white':
         setlinkColor('black')
         setNavPosition('fixed')
         nav.classList.add('whiteNav')
         break;
  
      case 'transparent':
        setlinkColor('white')
        setNavPosition('absolute')
        nav.classList.remove('whiteNav')
       break;
      
      }})

  useEffect(() =>{
    
    switch (active.navPosition){
      case 'fixed':
          setNavPosition('fixed')
          break;
  
      case 'absolute':
        setNavPosition('absolute')
        break;
      
      
      }})




  return (
    <styles.NavContainer className='' navPosition={NavPosition} linkColor={linkColor}>

      

      <Link to={'/'}>
        <styles.Logo>
          <span>P</span>  UM <span>P</span>
        </styles.Logo>
      </Link>


      <styles.NavItens linkColor={linkColor}>
        
        
        {unidadesActive ? <Link style={{borderBottom:'2px solid rgb(240, 10, 10)'}} to={'/unidades'}> UNIDADES</Link> : <Link to={'/unidades'}>UNIDADES</Link> }

        {modalidadesActive ? <Link style={{borderBottom:'2px solid rgb(240, 10, 10)'}} to={'/modalidades'}>MODALIDADES</Link> : <Link to={'/modalidades'}> MODALIDADES</Link> }
        
        {alunoActive ? <Link style={{borderBottom:'2px solid rgb(240, 10, 10)'}} to={'/aluno'}> ÂREA DO ALUNO</Link> : <Link to={'/aluno'}> ÂREA DO ALUNO</Link> }

        {contatoActive ? <Link style={{borderBottom:'2px solid rgb(240, 10, 10)'}} to={'/contato'}> FALE CONOSCO</Link> : <Link to={'/contato'}> FALE CONOSCO</Link> }

        <Link className='matricula' style={{borderBottom:'none', }} to={'/matricula'}><span>MATRICULE-SE</span></Link>
      </styles.NavItens>
      
     
      <styles.navModal isVisible={isVisible}>

        <header> 

        <span class="material-symbols-outlined" onClick={() => {setisVisible(false)}}>close</span>

        </header>

        <styles.navModalItens>
        
        
        {unidadesActive ? <Link style={{borderBottom:'2px solid rgb(240, 10, 10)'}} to={'/unidades'}> UNIDADES</Link> : <Link to={'/unidades'}>UNIDADES</Link> }

        {modalidadesActive ? <Link style={{borderBottom:'2px solid rgb(240, 10, 10)'}} to={'/modalidades'}>MODALIDADES</Link> : <Link to={'/modalidades'}> MODALIDADES</Link> }
        
        {alunoActive ? <Link style={{borderBottom:'2px solid rgb(240, 10, 10)'}} to={'/aluno'}> ÂREA DO ALUNO</Link> : <Link to={'/aluno'}> ÂREA DO ALUNO</Link> }

        {contatoActive ? <Link style={{borderBottom:'2px solid rgb(240, 10, 10)'}} to={'/contato'}> FALE CONOSCO</Link> : <Link to={'/contato'}> FALE CONOSCO</Link> }

        <Link style={{borderBottom:'none'}} to={'/matricula'}><span>MATRICULE-SE</span></Link>
        </styles.navModalItens>



      </styles.navModal>

      <styles.menuHamburguer  linkColor={linkColor}> 
          <span class="material-symbols-outlined" onClick={() => {setisVisible(true)}}>menu</span>
      </styles.menuHamburguer> 
     
    </styles.NavContainer>
  )
}

export default Nav
