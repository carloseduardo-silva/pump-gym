import styled from "styled-components";
import {keyframes} from "styled-components";


const infoCardEnter = keyframes`
0%{
    opacity:0;
    transform: translateY(40%);
}
100%{
    opacity:1;
   
}

`


export const infoContainer = styled.section`
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-around;
background-image: url('../../../public/fundoInfo.png');
background-size: cover;
background-repeat: no-repeat;
background-position: bottom;
box-shadow: inset 40px 80px 3rem rgba(0, 0, 0, 0.725);
width: 100%;
height: 62vh;

@media(max-width: 1000px){
    flex-direction: column;
    height: auto;
    padding: 5rem 10px;
    gap:6rem;

    .alunos{
        margin-left: 2rem;
    }

}


@media(max-width: 500px){
    .alunos{
        margin-left: 0rem;
    }

}

`

export const infoCard = styled.div`
display:flex;
flex-direction: row;
align-items:center;
color: white;
gap:2rem;
animation: ${infoCardEnter} 1s;



span{
    font-size: 5rem;
    color: rgb(240, 10, 10);
}

.content {
    font-size: 1.75rem;
    font-family: 'nunito', sans-serif;

}

.content h2{
    font-size: 3.2rem;
    font-family: 'teko', sans-serif;
    margin-bottom: -12px;
   
}
`