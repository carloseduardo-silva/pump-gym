import styled from "styled-components";
import {keyframes} from "styled-components";


const cardUnitiesEnter = keyframes`
    0%{
        opacity:0;
        transform: translate(-50%, -10%);
    }
    100%{

        opacity:1;
        transform: translate(0%, 0%);

    }

`

export const backgroundTitle = styled.h3`

    font-size:5.5rem;
    font-family: 'Teko', sans-serif;
    position:relative;
    transform: rotate(90deg);
    top: 40%;
    right: 45%;
    letter-spacing: 28px;
    color: rgb(210, 210, 210, 0.35);

    
    @media(max-width: 1100px){
        display:none;
        opacity:0;
    }

`


export const unidadesContainer = styled.section`
display:flex;
flex-direction: column;
align-items:center;
padding:4em 2em;



a{
    text-decoration:none;
    padding:1rem 1.75rem;
    background-color:rgb(240, 10, 10);
    color:white;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 16px;
    font-size:2rem;
    font-family: 'Teko', sans-serif;

}

a:hover{
    transform: scale(1.1);
    transition:250ms;
}

@media (max-width: 600px){
    a{
        font-size:2rem;
        padding: 1rem;
    }
}
`

export const title = styled.div`
display:flex;
align-items:center;
text-align:center;
margin:2em 3em;
max-width:900px;


h1{
    font-family: 'Teko', sans-serif;
    font-size: 4rem;
    font-weight: 500;
 
}

span{
    color: rgb(240, 10, 10);
}

@media (max-width: 600px){

    margin: 2rem 0rem;
    h1{
        font-size: 3rem;
        margin: 1rem 0rem;
    }
}


`
export const cardUnityContainer = styled.div`
display:none;
flex-direction: row;
flex-wrap: wrap;
max-width: 900px;
align-items:center;
justify-content:center;
gap:1em;
padding:1rem 0rem 6rem 0rem;
font-family: 'Nunito', sans-serif;

&.show{
    display:flex;
    
}

@media (min-width:1350px){
    gap: 5em;
    max-width:1100px
}

@media (max-width: 1000px){
    gap:3rem;
}



`

export const cardUnities = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
background-color: rgb(240, 240, 240);
border-bottom-left-radius:15px ;
border-bottom-right-radius:15px ;
width: 260px;
text-align: center;
box-shadow: 3px 3px 10px rgb(0, 0, 0, 0.3);
animation: ${cardUnitiesEnter} 1s ;



img{
    width:260px;
    height:350px;
}

p{
    font-size: 1.5rem;
    padding: 1.5em 0em;
}

@media (max-width: 650px){
    width:90%;
}
img{
    width:99%;
}

`

