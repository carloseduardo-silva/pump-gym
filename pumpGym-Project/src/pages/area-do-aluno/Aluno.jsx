import React, { useState, useEffect } from 'react'
import * as styles from './style'

import Nav from '../../components/Nav/Nav'
import  Footer  from '../../components/Footer/Footer'

const Aluno = () => {

  const [modalView, setmodalView] = useState(null);



  

  const openModal = () =>{
    setmodalView(true)
    const container = document.querySelector('div .container')
    container.classList.add('black')
   

  }

  const closeModal = () =>{
    const container = document.querySelector('div .container')
    setmodalView(null)
    container.classList.remove('black')
    

  }

  const handleForm = (e) => {
    e.preventDefault()
  }


  return (
    <>
    <Nav active={'aluno'} navSetting={'white'} navPosition={'absolute'}></Nav>
    
    <styles.alunoContainer className='container'> 

    <styles.alunoCard zIndexValue={modalView} onClick={() => openModal()}> 
      <span class="material-symbols-outlined">person</span> 
      <h2>Ârea do Aluno</h2>
    
    </styles.alunoCard>
    
    <styles.alunoCard zIndexValue={modalView}> 
    <span class="material-symbols-outlined">calendar_month</span>
    <h2> Consultar Horários</h2>

    </styles.alunoCard>

    </styles.alunoContainer>
      
    {modalView && <styles.modalAluno>
      
      <styles.modalHeader> 
        <h2>Ârea do aluno</h2>
      <span onClick={() => closeModal()} class="material-symbols-outlined">close</span>
      </styles.modalHeader>
      
      <styles.modalForm onSubmit={handleForm}>
        <label>
        <p> Informe seu CPF, E-mail ou ID cadastrados.</p>
        <input type="text" />
        <button> Continuar </button>
        </label>  
        </styles.modalForm>
        

      </styles.modalAluno>}


     <Footer></Footer> 
    </>
  )
}

export default Aluno
