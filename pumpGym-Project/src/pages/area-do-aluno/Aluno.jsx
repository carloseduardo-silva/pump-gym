import React from 'react'
import * as styles from './style'

import Nav from '../../components/Nav/Nav'
import  Footer  from '../../components/Footer/Footer'

const Aluno = () => {
  return (
    <>
    <Nav active={'aluno'} navSetting={'white'} navPosition={'absolute'}></Nav>
    
    <styles.alunoContainer> 
    <styles.alunoCard> 
      <span class="material-symbols-outlined">person</span> 
      <h2>Ârea do Aluno</h2>
    
    </styles.alunoCard>
    
    <styles.alunoCard> 
    <span class="material-symbols-outlined">calendar_month</span>
    <h2> Consultar Horários</h2>

    </styles.alunoCard>

    </styles.alunoContainer>
      
     <Footer></Footer> 
    </>
  )
}

export default Aluno
