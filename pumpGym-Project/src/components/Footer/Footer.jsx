import React from 'react'
import { Link } from 'react-router-dom'

import * as styles from './style'

const Footer = () => {
  return (
    <styles.Footer>
        
      <styles.Logo>
        <span>P</span>  UM <span>P</span>
      </styles.Logo>

      <styles.infoContainer>
        <styles.info>
            <h2>NAVEGUE</h2>
            <Link> Área do Aluno </Link>
            <Link> Sobre Nós </Link>
            <Link>Modalidades </Link>
            <Link> Políticas de Privacidade </Link>


        </styles.info>

        <styles.info>
            <h2>CONTATO</h2>
            <Link> 
            <span class="material-symbols-outlined">mail</span>
            sac@pumpacademy.com.br
            </Link>
            <Link>
            <span class="material-symbols-outlined">location_on</span> 
            Unidades
            </Link>
            <Link> 
            <span class="material-symbols-outlined">contact_phone</span> 
            Fale Conosco
            </Link>


        </styles.info>

        <styles.info>
            <h2>SIGA A PUMP</h2>
            <div></div>


        </styles.info>

      </styles.infoContainer>

    </styles.Footer>
  )
}

export default Footer
