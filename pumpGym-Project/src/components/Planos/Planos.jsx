import React from 'react'
import {Link} from "react-router-dom"
import * as styles from './styles'
import { useState } from 'react'

const Planos = () => {

  const [contatoIMG, setcontatoIMG] = useState('../../../public/workoutIMGblack.png')

  return (

    <styles.divContainer>
      
      <styles.planosContainer >
     
        <h1>ENTRE EM CONTATO</h1>
        <Link to={'/contato'}>Contato</Link>
      </styles.planosContainer>

      <styles.contatoContainer IMG={contatoIMG}>
   
        <h1>VEJA OS NOSSOS PLANOS</h1>
        <p>Começe a treinar por apenas R$10.00</p>
      </styles.contatoContainer>

    </styles.divContainer>
  )
}



export default Planos
