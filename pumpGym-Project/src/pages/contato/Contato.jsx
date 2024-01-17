import { useState } from 'react'
import * as styles from "./styles"
import { Link } from 'react-router-dom'


//components
import Nav from '../../components/Nav/Nav'
import  Footer  from '../../components/Footer/Footer'



const Contato = () => {


  const [inputName, setinputName] = useState()
  const [inputEmail, setinputEmail] = useState()
  const [inputCPF, setinputCPF] = useState()
  const [inputUnidade , setinputUnidade ] = useState()
  const [inputAssunto , setinputAssunto ] = useState()

  const handleForm = (e) =>{
    e.preventDefault()

  }

  return (
    <>
       <Nav active={'contato'}></Nav>

       <styles.contatoContainer>

        <styles.form onSubmit={handleForm}>
          <h1>ENTRE EM CONTATO COM A PUMP</h1>

          <label>
            <span>Nome do solicitante*</span>
            <input value={inputName} onChange={(e) => setinputName(e.target.value)} type="text"  name='nome'/>
          </label>

          <label>
            <span>E-mail do solicitante*</span>
            <input  value={inputEmail} onChange={(e) => setinputEmail(e.target.value)} type="email"  name='email'/>
          </label>

          <label>
            <span>CPF do solicitante</span>
            <input  value={inputCPF} onChange={(e) => setinputCPF(e.target.value)} type="number"  name='CPF'/>
          </label>

          <label>
            <span>Unidade</span>
            <input  value={inputUnidade} onChange={(e) => setinputUnidade(e.target.value)} type="text"  name='unidade'/>
          </label>

          <label>
            <span>Assunto</span>
            <input  value={inputAssunto} onChange={(e) => setinputAssunto(e.target.value)} type="text"  name='assunto'/>
          </label>

          <label>
            <span>Escreva sua solicitaçao*</span>
            <textarea name="solicitaçao" cols="30" rows="10"></textarea>
            
          </label>

          <button type='submit'>ENVIAR SOLICITAÇÃO</button>
        </styles.form>

        <styles.contato>
        <styles.Logo>
          <span>P</span>  UM <span>P</span>
        </styles.Logo>

        <h2>CONTATOS</h2>
        <Link> 
            <span class="material-symbols-outlined">mail</span>
            sac@pumpacademy.com.br
        </Link>
        <Link>
            <span class="material-symbols-outlined">location_on</span> 
            Unidades
        </Link>
        </styles.contato>

       </styles.contatoContainer>
      
      <Footer></Footer> 
      
    </>
  )
}

export default Contato
