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
            <div className='socialMedia-icons'>
              <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/1A1A1A/whatsapp--v1.png" alt="whatsapp--v1"/>
              <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/1A1A1A/instagram-new--v1.png" alt="instagram-new--v1"/>
              <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/1A1A1A/linkedin.png" alt="linkedin"/>
              <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/1A1A1A/facebook-new.png" alt="facebook-new"/>
            </div>


        </styles.info>

      </styles.infoContainer>

    </styles.Footer>
  )
}

export default Footer
