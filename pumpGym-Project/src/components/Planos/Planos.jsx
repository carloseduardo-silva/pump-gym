import React from 'react'
import {Link} from "react-router-dom"
import * as styles from './styles'
import { useState } from 'react'

const Planos = () => {

  const [contatoIMG, setcontatoIMG] = useState('./contatoContainer.png')

  return (

    <styles.sectionContainer>

      <styles.divContainer>
      
      <Link to={'/contato'}>
        <styles.contatoContainer IMG={contatoIMG}>
          <h1>ENTRE EM CONTATO</h1>
          <Link to={'/contato'}>Contato</Link>
        </styles.contatoContainer>
      </Link>


      <Link style={{animationDelay: '100ms'}} to={'/matricula'}>
        <styles.planosContainer >
        <h1>VEJA OS NOSSOS PLANOS</h1>
          <p> Planos a partir de apenas  R$97.00 por mês</p>
        </styles.planosContainer>
      </Link>

      </styles.divContainer>

    </styles.sectionContainer>
  )
}



export default Planos
