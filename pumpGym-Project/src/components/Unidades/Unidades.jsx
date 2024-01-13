import React from 'react'
import * as styles from "./styles"
import {Link} from "react-router-dom"

const Unidades = () => {
  return (
    <styles.unidadesContainer>

        <styles.title> 
         <h1> 
            CONHEÇA A UNIDADE MAIS PERTO DA SUA CASA E FAÇA PARTE DO 
            TEAM 
             <span style={{marginLeft:'14px'}}>P</span>UM<span>P</span> </h1>
            </styles.title>

        <styles.cardUnityContainer> 
            <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 1 24H</p>
            </styles.cardUnities>
            <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 2 24H</p>
            </styles.cardUnities>
            <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 3 24H</p>
            </styles.cardUnities>
            <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 4 24H</p>
            </styles.cardUnities>
            <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 5 24H</p>
            </styles.cardUnities>
            <styles.cardUnities> 
               <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

               <p> Unidade 6 24H</p>
            </styles.cardUnities>
           
        </styles.cardUnityContainer>

        <Link to={'/modalidades'}>
         CONHEÇA TODAS AS UNIDADES
        </Link>
      
    </styles.unidadesContainer>
  )
}

export default Unidades
