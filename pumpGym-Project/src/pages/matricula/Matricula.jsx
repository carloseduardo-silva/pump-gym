import React, { useState } from 'react'
import * as styles from './styles'
import { Link } from 'react-router-dom'


//components
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'





const Matricula = () => {

  const [showPumpBenefits, setShowPumpBenefits] = useState()
  const [showFitBenefits, setShowFitBenefits] = useState()
  const [showBlackBenefits, setShowBlackBenefits] = useState()

  return (
    <>
    <Nav ></Nav>
    
    <styles.matriculaHeader> <h1> CONHEÇA OS NOSSOS PLANOS </h1></styles.matriculaHeader>

    <styles.matriculaContainer>  
      <header>
        <h1>VENHA TREINAR NA PUMP GYM</h1>
        <p>A melhor infraestrutura com mensalidades acessíveis</p>
      </header>
    
    
      <styles.planosMobileContainer>
          <div className='card'>
            <div className='header'> 
            <h2> PLANO PUMP</h2>
            <p> Pague menos para treinar o quanto quiser na sua unidade.</p>
            <h3>A PARTIR DE <br /> R$99,00/mês</h3>
            <button>COMEÇAR AGORA</button>
          
            </div>
            {showPumpBenefits && <div className='infos'>
              <p>Area de Musculação e Aeróbicos ✅</p>
              <p>Pump Gym GO (treinos onlines) no app ✅</p>
              <p>Pump Gym App ✅</p>
            </div>}
            {showPumpBenefits &&  <span onClick={() =>setShowPumpBenefits(false)}>Mostrar Menos</span> }
            {!showPumpBenefits &&  <span onClick={() =>setShowPumpBenefits(true)}>Ver Beneficios </span> }
          </div>

          <div className='card'>
            <div className='header'> 
            <h2> PLANO FIT</h2>
            <p>Treine quando quiser na sua unidade.</p>
            <h3>A PARTIR DE <br /> R$119,00/mês</h3>
            <button>COMEÇAR AGORA</button>
            </div>
            {showFitBenefits && <div className='infos'>
              <p>Area de Musculação e Aeróbicos ✅</p>
              <p>Pump Gym GO (treinos onlines) no app ✅</p>
              <p>Pump Gym App ✅</p>
            </div>}
            {showFitBenefits &&  <span onClick={() =>setShowFitBenefits(false)}>Mostrar Menos</span> }
            {!showFitBenefits &&  <span onClick={() =>setShowFitBenefits(true)}>Ver Beneficios</span> }
          </div>

          <div className='card'>
            <div className='header'> 
            <h2> PLANO BLACK</h2>
            <p>Treine quando quiser em qualquer unidade.</p>
            <h3>A PARTIR DE <br /> R$139,00/mês</h3>
            <button>COMEÇAR AGORA</button>
            </div>
            {showBlackBenefits && <div className='infos'>
              <p>Area de Musculação e Aeróbicos ✅</p>
              <p>Pump Gym GO (treinos onlines) no app ✅</p>
              <p>Pump Gym App ✅</p>
              <p>Acesso ilimitado a todas as academias da rede ✅</p>
              <p>Leve amigos para treinar com você ✅</p>
            </div>}
            {showBlackBenefits &&  <span onClick={() =>setShowBlackBenefits(false)}>Mostrar Menos</span> }
            {!showBlackBenefits &&  <span onClick={() =>setShowBlackBenefits(true)}>Ver Beneficios</span> }
          </div>

        </styles.planosMobileContainer>
          
        <styles.planosDesktopContainer>
       
          <table>
            <tr>
              <th> </th>
              <th> PLANO PUMP 
              <p> Pague menos para treinar o quanto quiser na sua unidade.</p>

              </th>
              <th> PLANO FIT
              <p>Treine quando quiser na sua unidade.</p> </th>

              <th> PLANO BLACK
              <p>Treine quando quiser em qualquer unidade.</p> </th>
            </tr>

            <tr > 
              <td> <p>Area de Musculação e Aeróbicos</p></td>

              <td> ✅</td>

              <td> ✅</td>
              
              <td> ✅</td>
            </tr>

            <tr> 
              <td> <p>Pump Gym GO (treinos onlines) no app</p></td>

              <td> ✅</td>

              <td> ✅</td>
              
              <td> ✅</td>
            </tr>

            <tr> 
              <td> <p>Pump Gym App</p> </td>

              <td> ✅</td>

              <td> ✅</td>
              
              <td> ✅</td>
            </tr>

            <tr> 
              <td> <p>Acesso ilimitado a todas as academias da rede</p></td>

              <td> ❌</td>

              <td> ❌</td>
              
              <td> ✅</td>
            </tr>

            <tr> 
              <td > <p> Leve amigos para treinar com você </p></td>

              <td> ❌</td>

              <td> ❌</td>
              
              <td> ✅</td>
            </tr>

            <tr > 
              <td style={{textAlign:'left', border:'none'}}> Confira as condições da academia escolhida. </td>

              <td style={{border:'none'}}>  <h2>A PARTIR DE <br /> R$99,00/mês</h2> </td>

              <td style={{border:'none'}}>  <h2>A PARTIR DE <br /> R$119,00/mês</h2> </td>
              
              <td style={{border:'none'}}>  <h2>A PARTIR DE <br /> R$139,00/mês</h2> </td>
            </tr>


          </table>
          

        </styles.planosDesktopContainer>

        <Link to={'/unidades'}> COMEÇAR AGORA </Link>
        
     
    </styles.matriculaContainer>

     <Footer></Footer> 
    </>
  )
}

export default Matricula
