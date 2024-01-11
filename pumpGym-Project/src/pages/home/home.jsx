import React from 'react'
import Nav from '../../components/Nav/Nav'

import * as styles from "./styles"
import Unidades from '../../components/Unidades/Unidades'
import Modalidades from '../../components/Modalidades/modalidades'
import Planos from '../../components/Planos/Planos'

const Home = () => {
  return (
    <>
    <Nav></Nav>

    <styles.advertisementContainer>
      <p>WELCOME TO PUMP GYM</p>
      <h1> Chegou o momento de dar um <span>PUMP</span> na sua vida.</h1>
     
    </styles.advertisementContainer>
    
    <Unidades></Unidades>

    <Modalidades></Modalidades>
    <Planos></Planos>
      
    </>
  )
}

export default Home
