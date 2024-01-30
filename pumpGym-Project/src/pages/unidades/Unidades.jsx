import React, { useState } from 'react'
import * as styles from "./styles"
import { Link } from 'react-router-dom'

//components
import Nav from '../../components/Nav/Nav'
import  Footer  from '../../components/Footer/Footer'


const UnidadesPage = () => {

  const [inputCep, setinputCep] = useState()
  const [inputCity, setinputCity] = useState(false)
  const [inputNeighborhood, setinputNeighborhood] = useState(false)
  const [inputState, setinputState] = useState(false)
  const [reqError, setReqError] = useState(false)

  const searchLocation =  (cep) =>{
   
    if(cep !== ''  ){
      const url = `https://brasilapi.com.br/api/cep/v2/{${cep}}`
    
      const req = new XMLHttpRequest()
      req.open('GET', url)
      req.send()

      req.onload = () =>{
        if(req.status === 200){
          setReqError(false)
          let locationObj = JSON.parse(req.response)
          setinputState(locationObj.state)
          setinputCity(locationObj.city)
          setinputNeighborhood(locationObj.neighborhood)
          
        }
        else{
          setinputCity(false)
          setReqError('Não foi possivel o acesso ao endereço, por favor digite adequadamente o CEP.')
        }
      }
    } 
  }

  return (
    <>
       <Nav  active={'unidades'}></Nav>

       <styles.unidadesHeader>
          <h1> UNIDADES </h1>

       </styles.unidadesHeader>

       <styles.unidadesContainer id='unidadesContainer' >

          <styles.title> 
          <h1> 
              CONHEÇA A UNIDADE MAIS PERTO DA SUA CASA E FAÇA PARTE DO 
              TEAM 
              <span style={{marginLeft:'14px'}}>P</span>UM<span>P</span> </h1>
          </styles.title>

          <styles.searchUnityContainer>

            <label>

              <input required onChange={(e) => setinputCep(e.target.value)} placeholder='Digite seu CEP' type="text" /> <button onClick={() => searchLocation(inputCep)}>Buscar</button>
            </label>

            {inputCity && <p>Unidades mais próximas em: <span>{inputCity} - {inputState}, Bairro {inputNeighborhood}:</span></p>}
            {reqError && <p style={{color:'red'}}> {reqError}</p>}
          </styles.searchUnityContainer>

          <styles.cardUnityContainer> 
              <styles.cardUnities> 
                <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

                <p> Unidade 1 24H</p>
                <Link>VER MAIS</Link>
              </styles.cardUnities>

              <styles.cardUnities style={{animationDelay: '200ms'}}> 
                <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

                <p> Unidade 2 24H</p>
                <Link>VER MAIS</Link>
              </styles.cardUnities>

              <styles.cardUnities style={{animationDelay: '300ms'}}> 
                <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

                <p> Unidade 3 24H</p>
                <Link>VER MAIS</Link>
              </styles.cardUnities>

              <styles.cardUnities style={{animationDelay: '400ms'}}> 
                <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

                <p> Unidade 4 24H</p>
                <Link>VER MAIS</Link>
              </styles.cardUnities>

              <styles.cardUnities style={{animationDelay: '500ms'}}> 
                <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

                <p> Unidade 5 24H</p>
                <Link>VER MAIS</Link>
              </styles.cardUnities>

              <styles.cardUnities style={{animationDelay: '600ms'}}> 
                <img src="https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg" alt="" />

                <p> Unidade 6 24H</p>
                <Link>VER MAIS</Link>
              </styles.cardUnities>
            
          </styles.cardUnityContainer>

        

        </styles.unidadesContainer>

       
      
      <Footer></Footer> 
    </>
  )
}

export default UnidadesPage
