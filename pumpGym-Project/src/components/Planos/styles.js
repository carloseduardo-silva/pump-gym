import styled from "styled-components"
import {keyframes} from "styled-components"

const divEnter = keyframes`

0%{
    opacity:0;
    transform: translate(0%, -20%);

}
100%{
    opacity:1;
    transform: translate(0%, 0%);
}
`

export const divContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4rem 1rem;
gap:3rem;


a{
    text-decoration: none;
    animation: ${divEnter} 1s;
}

@media (max-width: 1000px){
    flex-direction: column;
    gap:3rem;
}



`

export const planosContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
text-align:center;
background-color: rgb(240, 10, 10);
width:500px;
height: 500px;
color:white;
box-shadow: inset 0px 0px 100px 40px rgba(0, 0, 0, 0.500);

&:hover{
    cursor:pointer;
    transform: scale(1.05);
    transition: 400ms; 
    box-shadow: inset 0px 0px 100px 50px rgba(0, 0, 0, 0.630);
   
}

h1{
    margin: 0rem 1rem;
    font-size: 3.5rem;
    font-family: 'Teko', sans-serif;
}

p{
    font-size: 1.15rem;
    margin:0.5rem 1rem;
    font-family: 'Nunito', sans-serif;
    font-weight: bolder;
}



@media (max-width: 1000px){
    width:80vw;

    h1{
        margin: 0rem 1rem;
        font-size: 4.2rem;
    }

    p{
        font-size: 1.35rem;
        margin: 0rem 3rem;
        
    }

   

    
}

`
export const contatoContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
background-image: url(${(props) => props.IMG});
background-size: cover;
background-repeat: no-repeat;
text-align:center;
width:500px;
height: 500px;
color:white;
box-shadow: inset 0px 0px 100px 40px rgba(0, 0, 0, 0.600);


&:hover{
    cursor:pointer;
    transform: scale(1.05);
    transition: 400ms;
    box-shadow: inset 0px 0px 100px 55px rgba(0, 0, 0, 0.850);
}

a{
    text-decoration:none;
    padding:0.75rem 1.2rem;;
    background-color:white;
    color:rgb(252, 32, 32);
    border-bottom-right-radius: 16px;
    border-top-left-radius: 16px;
    font-size:1.35rem;
    z-index:3;
    font-family: 'Nunito', sans-serif;
    font-weight: bolder;
}

h1{
    font-size:3.5rem;
    margin: 3rem 1rem 1rem 1rem;
    font-family: 'Teko', sans-serif;
}




@media (max-width: 1000px){
    width:80vw;


    h1{
        margin: 1rem 0.75rem;
        font-size:4.5rem;
    }

    a{
        font-size: 1.5rem;
    }
}






`