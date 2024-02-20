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


export const unidadesContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
padding:9em 2em 6em 2em;

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
        font-size:1.55rem;
    }
}
`

export const unidadesHeader = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-image: url('./fundoUnidades.png');
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
        font-size: 3.25rem;
        margin: 1rem 0rem;
    }
}


`
export const searchUnityContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center; 
    margin: 2.5rem 1rem;
  

    input{
        padding: 0.2rem 0.3rem;
        font-size: 1.5rem;
        font-family: 'Nunito', 'Sans-Serif';
        border: 0.4px solid rgb(195, 195, 195);
        width: 425px;
    }

    button{
        text-decoration:none;
        padding:0.15rem 0.75rem;
        background-color:rgb(240, 10, 10);
        color:white;
        font-size:1.65rem;
        font-family: 'Teko', sans-serif;
        border: none;
        border-radius: 3px;
    }

    button:hover{
        cursor:pointer;
        transform: scale(1.05);
        transition: 250ms;
    }

    p{
        font-family: 'Nunito', sans-serif;
        font-size: 1.5rem;
        margin: 3.5rem 0rem 0.5rem;
    }

    p span{
        font-weight: bolder;
    }


    @media (max-width: 620px){
        text-align:center;
        
        input{
            font-size: 1.75rem;
            width: 100%;
            margin-bottom: 1rem;
        }
        button{
            padding:0.2rem 1.25rem;
            font-size:1.85rem;
        }
    }


    @media (min-width: 1000px){
        input{
            width: 580px;
        }
    }
    
`

export const cardUnityContainer = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
max-width: 900px;
align-items:center;
justify-content:center;
gap:1em;
padding:1rem 0rem 6rem 0rem;
font-family: 'Nunito', sans-serif;



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
padding-bottom: 1.2rem;



img{
    width:260px;
    height:350px;
}

p{
    font-size: 1.5rem;
    padding: 1.5em 0em;
}

a{
    text-decoration:none;
    padding:0.2rem 0.55rem;
    background-color:rgb(240, 10, 10);
    color:white;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 16px;
    font-size:1.65rem;
    font-family: 'Teko', sans-serif;
    width:160px;
    
}


@media (max-width: 650px){
    width:90%;
}
img{
    width:99%;
}

`

