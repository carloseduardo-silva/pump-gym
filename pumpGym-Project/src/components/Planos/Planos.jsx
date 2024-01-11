import React from 'react'
import {Link} from "react-router-dom"
import * as styles from './styles'

const Planos = () => {
  return (

    <styles.divContainer>
      
      <styles.planosContainer>
     
        <h1>ENTRE EM CONTATO</h1>
        <Link to={'/contato'}>Contato</Link>
      </styles.planosContainer>

      <styles.contatoContainer>
   
        <h1>VEJA OS NOSSOS PLANOS</h1>
        <p>Começe a treinar por apenas R$10.00</p>
      </styles.contatoContainer>

    </styles.divContainer>
  )
}



export default Planos
