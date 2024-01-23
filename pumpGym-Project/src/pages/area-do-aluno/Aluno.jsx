import React, { useState, useEffect } from 'react'
import * as styles from './style'

import Nav from '../../components/Nav/Nav'
import  Footer  from '../../components/Footer/Footer'

const Aluno = () => {

  const [modalView, setmodalView] = useState(null);
  const [tableView, setTableView] = useState(false);


  

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

  
  const openTable = () =>{
    setTableView(true)
   
   

  }

  const closeTable = () =>{
    
    setTableView(null)
    
    

  }

  const handleForm = (e) => {
    e.preventDefault()
  }


  return (
    <>
    <Nav active={'aluno'} navSetting={'white'} navPosition={'absolute'}></Nav>
    
    {!tableView && <styles.alunoContainer className='container'> 

     <styles.alunoCard zIndexValue={modalView} onClick={() => openModal()}> 
        <span class="material-symbols-outlined">person</span> 
        <h2>Ârea do Aluno</h2>
      
      </styles.alunoCard>
    
    <styles.alunoCard zIndexValue={modalView} onClick={() => openTable()}> 
    <span class="material-symbols-outlined">calendar_month</span>
    <h2> Consultar Horários</h2>

    </styles.alunoCard>

    </styles.alunoContainer>}

    {tableView && <styles.tableAluno>
        <header>
          <h2>Tabela de Horários</h2> <span class="material-symbols-outlined" onClick={() => closeTable()}>close</span> 
        </header>

        <table>
          <tr>
              <th> <span class="material-symbols-outlined">calendar_month</span></th>
              <th> DOM <br /> <span>20</span></th>
              <th> SEG <br /><span>21</span></th>
              <th> TER <br /> <span>22</span></th>
              <th> QUA <br /> <span>23</span></th>
              <th> QUI <br /> <span>24</span></th>
              <th> SEX <br /><span>25</span></th>
              <th> SAB <br /> <span>26</span></th>

          </tr>

          <tr>
            <td>7:00</td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
          </tr>

          <tr>
            <td>8:00</td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
          </tr>

          <tr>
            <td>18:00</td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
          </tr>

          <tr>
            <td>19:00</td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
          </tr>

          <tr>
            <td>20:00</td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
            <td> X </td>
          </tr>

        </table>
      </styles.tableAluno>}
      
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
