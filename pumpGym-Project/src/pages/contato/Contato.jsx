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
  const [inputSolicitação , setinputSolicitação ] = useState()

  const handleForm = (e) =>{
    e.preventDefault()

    const solicitaçãoInfo = {
      name: inputName,
      email: inputEmail,
      cpf: inputCPF,
      unidade: inputUnidade,
      assunto: inputAssunto,
      solicitacao: inputSolicitação
    }

   
    console.log(solicitaçãoInfo)
    window.alert('SOLICITAÇÃO ENVIADA!')
  }

  return (
    <>
       <Nav active={'contato'} navSetting={'white'} navPosition={'absolute'}></Nav>

       <styles.contatoContainer>

        <styles.form onSubmit={handleForm}>
          <h1>ENTRE EM CONTATO COM A PUMP</h1>

          <label>
            <span>Nome do solicitante*</span>
            <input required value={inputName} onChange={(e) => setinputName(e.target.value)} type="text"  name='nome'/>
          </label>

          <label>
            <span>E-mail do solicitante*</span>
            <input required  value={inputEmail} onChange={(e) => setinputEmail(e.target.value)} type="email"  name='email'/>
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
            <span>Assunto*</span>
            <input  required value={inputAssunto} onChange={(e) => setinputAssunto(e.target.value)} type="text"  name='assunto'/>
          </label>

          <label>
            <span>Escreva sua solicitaçao*</span>
            <textarea  value={inputSolicitação} onChange={(e) => setinputSolicitação(e.target.value)} required name="solicitaçao" cols="30" rows="10"></textarea>
            
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

     
        <div className='socialMedia-icons'>
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/whatsapp--v1.png" alt="whatsapp--v1"/>
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/instagram-new--v1.png" alt="instagram-new--v1"/>
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/linkedin.png" alt="linkedin"/>
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/facebook-new.png" alt="facebook-new"/>
        </div>

        </styles.contato>

       </styles.contatoContainer>
      
      <Footer></Footer> 
      
    </>
  )
}

export default Contato
