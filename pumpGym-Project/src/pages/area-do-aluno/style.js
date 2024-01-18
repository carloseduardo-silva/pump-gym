import styled from "styled-components";

export const alunoContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
gap:2.5rem;
align-items: center;
height: 100vh;
padding: 2rem;
background-color: #F9f6EE;


@media (max-width: 600px){
    flex-direction: column;
    gap: 4rem;
    padding: 3rem 1rem;
}
`

export const alunoCard = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 0rem 1rem;
width: 240px;
height: 260px;
border-radius: 20px;
gap: 1.5rem;
color:white;
background-color: rgb(10, 10, 10);


&:hover{
    cursor:pointer;
    transform: scale(1.05);
    transition: 350ms;
}

span{
    font-size: 5rem;
    color:rgb(240, 10, 10);
}

h2{
    font-family: 'Nunito';
    font-size: 2rem;
}

`