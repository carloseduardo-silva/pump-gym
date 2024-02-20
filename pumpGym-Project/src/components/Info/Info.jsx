import React, { useEffect } from 'react'

import * as styles from "./styles"

const Info = () => {
    
    //counting animation
    useEffect(() =>{
        const counter = document.querySelector('#counter')

        function increment(i, max){
            if(i > max) return;
            setTimeout(function(){
              counter.innerText = i;
              increment(i+1, max);
            }, 370)
          }

        increment(0,8)  
        
    })

    useEffect(() =>{
        const counter = document.querySelector('#counter2')

        function increment(i, max){
            if(i > max) return;
            setTimeout(function(){
              counter.innerText = "+ " + i;
              increment(i+100, max);
            }, 98)
          }

        increment(100,3000)  
        
    })

    useEffect(() =>{
        const counter = document.querySelector('#counter3')

        function increment(i, max){
            if(i > max) return;
            setTimeout(function(){
              counter.innerText =  "+ " + i;
              increment(i+100, max);
            }, 250)
          }

        increment(0,1000)  
        
    })

  return (
    <styles.infoContainer>
        
        <styles.infoCard> 
            <span class="material-symbols-outlined">location_city</span>

            <div className='content'>
                <h2 id='counter'>0</h2> 
                Unidades
            </div>
        </styles.infoCard>

        <styles.infoCard className='alunos'> 
        <span class="material-symbols-outlined">groups</span>

            <div className='content'>
                <h2 id='counter2'>+ 0</h2> 
                Alunos <br /> Matriculados
            </div>
        </styles.infoCard>

        <styles.infoCard> 
        <span class="material-symbols-outlined">fitness_center</span>

            <div className='content'>
                <h2 id='counter3'>+ 0</h2> 
               Profissionais <br />
               Especializados
            </div>
        </styles.infoCard>
      
    </styles.infoContainer>
  )
}

export default Info
