import styled from "styled-components";
import {keyframes} from "styled-components";


const modalEnter = keyframes`

0%{
    opacity: 0;
}
100%{
    opacity:1;
}

`


export const alunoContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
gap:3rem;
align-items: center;
height: 100vh;
padding: 2rem;
background-color: #F9f6EE;

&.black{
    background-color: rgb(0, 0, 0, 0.4);
}


@media (max-width: 600px){
    flex-direction: column;
    gap: 5rem;
    padding: 6rem 1rem;
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
z-index: ${(props) => props.zIndexValue ? "-1" : "4"} ;


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

export const modalAluno = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    position: absolute;
    width: 60vw;
    max-width: 800px;
    background-color: white;
    border-radius: 10px;
    transform:translate(-50%, -45%);
    left: 50%;
    top: 50%;
    justify-content: space-between;
    padding: 1rem;
    animation: ${modalEnter} 600ms;


    span{
        font-size: 2rem;
       
    }

    span:hover{
        cursor:pointer;
    }

    @media (max-width:1000px) {
        width: 80vw;
       

    }

`

export const modalHeader = styled.header`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    width: 93%;
    margin: 1rem;
    padding:1rem;
    font-family: 'Nunito', 'Sans-Serif';
`


export const modalForm = styled.form`
    display:flex;
    width: 93%;
    align-items:center;
    justify-content: center;
    padding: 3rem 3rem 4rem 3rem;
    font-family: 'Nunito', 'Sans-Serif';

    label{
        width: 95%;
    }

    input{
        padding: 0.15rem 0rem;
        font-size: 1.5rem;
        font-family: 'Nunito', 'Sans-Serif';
        border: 0.4px solid rgb(195, 195, 195);
        width:100%;
    }

    button{
        color:white;
        background-color: rgb(240, 10, 10);
        padding: 0.3rem 0.85rem;
        border: none;
        border-radius: 3px;
        margin-top: 1rem;
        font-size: 1.1rem;
    }

    button:hover{
        transform:scale(1.05);
        transition: 250ms;
        cursor:pointer;
    }

    p{
        font-size: 1.15rem;
    }

`