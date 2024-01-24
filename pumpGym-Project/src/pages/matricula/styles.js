import styled from "styled-components";
import {keyframes} from "styled-components";

const infosEnter = keyframes`
0%{
    opacity: 0;
    transform: translateY(20%);
}
100%{
    opacity: 1;
    transform: translateY(0%);
}
`

export const matriculaHeader = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-image: url('../../../public/fundoUnidades.png');
background-size: cover;
background-repeat: no-repeat;
box-shadow: inset 40px 80px 3rem rgba(0, 0, 0, 0.725);
width: 100%;
height: 100vh;
font-family: 'Teko', sans-serif;


h1{
    color:white;
    padding: 1rem 3.5rem;
    background-color: rgb(5, 5, 5, 0.3);
    border-radius: 30px;
    border: 1px solid rgb(240, 10, 10);
    font-size:4.25rem;

}

h1:hover{
    border: 1px solid white;
    transition: 250ms;
    cursor: pointer;
}

@media (max-width:1000px){
    h1{
        font-size:3.25rem;
    }
}

@media (max-width:700px){
    h1{
        font-size:2.25rem;
        padding: 1rem 2rem;
    }
}

@media (max-width:530px){
    h1{
        text-align: center;
        font-size:1.75rem;
        padding: 1rem;
    }
}

`

export const matriculaContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 5rem 2rem 9rem 2rem;
    flex-direction: column;
    background-color: #F9f6EE;

    header{
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        flex-direction: column;
        margin: 6rem 0px 3rem 0px;
    }
    
    header h1{
        font-size:4rem;
        font-family: "Teko", "Sans-Serif";
    }

    header p{
        font-family: "Nunito", "Sans-Serif";
        font-size:1.35rem;
    }

     a{
        text-align:center;
        text-decoration: none;
        font-family: 'Teko', 'Sans-Serif';
        width:20vw;
        color: white;
        background-color: rgb(240, 10, 10);
        padding: 0.15rem 0rem;
        border-radius: 30px;
        font-size: 2rem;
        border: none;
        margin-top: 3rem;
    }

     a:hover{
        cursor:pointer;
        transform: scale(1.05);
        transition: 300ms;
    }

    @media(max-width: 1000px){
        a{
            margin-top: 5rem;
            width:230px;
        }
    }
`

export const planosDesktopContainer = styled.div`
    display:none;
    opacity:0;


    table, th, td {
        
        border-collapse: collapse;
        text-align:center;
      }

    table{
        font-family: 'Nunito', sans-serif;
        width: 90vw;
        max-width: 1200px;
        margin: 2.5rem 0rem;
    }

    th{
        font-family: 'Teko', sans-serif;
        font-size: 1.75rem;
        margin-bottom: 1rem;

    }

    th p{
        font-family: 'Nunito', sans-serif;
        font-size: 0.85rem;
        color: rgb(100, 100, 100, 0.7);
        margin: 3px 10px;
    }

    td{
        border-bottom: 1px solid black;
        padding: 1.5rem;
       
      }

      td h2{
        font-size: 1.35rem;
      }

      td p {
        font-size: 1.1rem;
        text-align: left;

      }
      
      td span{
    
        color: rgb(100, 100, 100, 0.7);
      }


    @media (min-width:868px){
        display: flex;
        opacity: 1;
    }
`

export const planosMobileContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    gap: 2rem;


    div.infos{
        animation: ${infosEnter} 600ms;
        margin: 1.5rem 0rem 2.25rem 0rem;
    }

    div.infos p {
        margin: 1rem 0.2rem;
    }

    div.card{
        display:flex;
        align-items:flex-start;
        flex-direction: column;
        border: 1px solid rgb(240, 10, 10, 0.5);
        border-radius: 5px;
        width: 70vw;
        padding: 1rem 2rem;
        font-family: 'Nunito', 'Sans-Serif';
    }

    div.card span{
        text-align:center;
        margin: 0 auto;
        font-weight: bolder;
    }

    div.card span:hover{
        cursor:pointer;
        color: rgb(100, 100, 100);
       }

    div.header h2{
        font-family: 'Teko', 'Sans-Serif';
        font-size: 2.5rem;
    }

    div.header p{
        font-size: 18px;
        color: rgb(80, 80, 80, 0.8);
        font-weight: bolder;
    }

    div.header h3{
        margin:0.85rem 0rem;
        font-size:1.5rem;
    }
    
    div.header button{
        font-family: 'Teko', 'Sans-Serif';
        width:71vw;
        color: white;
        background-color: rgb(240, 10, 10);
        padding: 0.15rem 0rem;
        border-radius: 30px;
        font-size: 1.65rem;
        border: none;
        letter-spacing: 1px;
        margin: 2rem 0rem 1.2rem;
    }

    div.header button:hover{
        cursor:pointer;
        transform: scale(1.05);
        transition: 300ms;
    }

    


    @media (min-width:868px){
        display: none;
        opacity:0;
}

`