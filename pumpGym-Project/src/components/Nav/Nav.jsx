import React, { useState } from 'react'
import {Link}  from "react-router-dom"
import * as styles from "./styles"

const Nav = () => {

  const [isVisible, setisVisible] = useState(false)

  return (
    <styles.NavContainer>

      

      <styles.Logo>
       

        <span>P</span>  UM <span>P</span>
        </styles.Logo>


      <styles.NavItens>
        
        <Link to={'/'}>Sobre Nós</Link>
        <Link to={'/unidades'}>Unidades</Link>
        <Link to={'/modalidades'}>Modalidades</Link>
        <Link to={'/aluno'}>Ârea do Aluno</Link>
        <Link to={'/contato'}>Fale Conosco</Link>
        <Link to={'/matricula'}><span>Matricule-se</span></Link>
      </styles.NavItens>
      
     
      <styles.navModal isVisible={isVisible}>

      <span class="material-symbols-outlined" onClick={() => {setisVisible(false)}}>close</span>
      </styles.navModal>

      <styles.menuHamburguer> 
          <span class="material-symbols-outlined" onClick={() => {setisVisible(true)}}>menu</span>
        </styles.menuHamburguer> 
     
    </styles.NavContainer>
  )
}

export default Nav
