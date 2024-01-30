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

export const modalidadeHeader = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-image: url('../../../public/fundoModalidades.png');
background-size: cover;
background-repeat: no-repeat;
box-shadow: inset 40px 80px 3rem rgba(0, 0, 0, 0.725);
width: 100%;
height: 100vh;
font-family: 'Teko', sans-serif;

h1{
    color:white;
    padding: 1rem 3.5rem;
    background-color: rgb(5, 5, 5, 0.2);
    border-radius: 30px;
    border: 1px solid rgb(240, 10, 10);
    font-size:4.25rem;

}

h1:hover{
    border: 1px solid white;
    transition: 250ms;
    cursor: pointer;
}

@media (max-width:600px){
    h1{
        font-size:3.25rem;
    }
}

@media (max-width:430px){
    h1{
        font-size:2.25rem;
    }
}

`


export const modalidadeContainer = styled.div`
display:flex;
flex-direction:row;
padding:2rem 1rem;
justify-content:center;
align-items:start;
text-align:center;
margin: 1rem 0rem 1rem 2rem;
gap: 2rem;







a:hover{
    transform: scale(1.02);
    transition:350ms;
}


@media (max-width: 1150px){
    flex-direction:column;
    align-items:center;
}

`

export const description = styled.div`
margin: 1rem 0rem;


a{
    text-decoration: none;
}

p{
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    text-align:left;
    max-width:950px;

}

div.unidades{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 900px;
    align-items:center;
    justify-content:start;
    gap:1em;
    padding:2rem 0rem;
    
    margin:2rem 0rem;
}

div.unidades h2{
    margin: 0px 1rem;
    font-family: 'TEKO', sans-serif;
    font-size: 2rem;
}



`

export const modalitiesAsideNav = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:start;
    background-color: white;
    padding: 1rem;
    gap:0.5rem;
    margin: 1rem 0rem;

    a{
        text-decoration:none;
        color:rgb(240, 10, 10);
    }

    a:hover{
        transform: scale(1.02);
        transition:250ms;
        color:rgb(180, 180, 180);
    }

    h2{
        margin: 0.5rem 0rem 2rem;
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
width: 240px;
text-align: center;
box-shadow: 3px 3px 10px rgb(0, 0, 0, 0.3);
animation: ${cardUnitiesEnter} 1s ;



img{
    width:230px;
    height:330px;
}

p{
    font-size: 1.5rem;
    padding: 10px;
   
}

@media (max-width: 650px){
    width:90%;
}
img{
    width:99%;
}

`

