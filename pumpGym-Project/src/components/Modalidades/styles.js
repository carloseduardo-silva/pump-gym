import styled, {keyframes} from "styled-components"


const divEnter = keyframes`

0%{
    opacity:0;
    transform: translate(-50%, -10%);

}
100%{
    opacity:1;
    transform: translate(0%, 0%);
}
`


 const Show = keyframes`
0%{
    opacity:0.8;
    transform: translate(0%, 200%);
}
100%{
    opacity:1;
    transform: translate(0%, 0%);


`




export const modalidadesContainer = styled.div`
display:flex;
flex-direction:column;
padding:1rem 1rem 3.5rem 1rem;
justify-content:center;
text-align:center;
background-color: rgb(240, 240, 240);

h1{
    margin: 3rem 0rem;
    font-family: 'Teko', sans-serif;
    font-size: 4rem;
    font-weight: 500;
}


a{
    
    text-decoration:none;
    padding:0.65rem 1.75rem;
    background-color:rgb(240, 10, 10);
    color:white;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 16px;
    font-size:2rem;
    font-family: 'Teko', sans-serif;
    width:160px;
    margin: 2rem auto;

}

a:hover{
    transform: scale(1.1);
    transition:250ms;
}

`



export const cardContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
margin:1rem 0rem;

a{
    background-color:white;
    text-decoration: none;
    padding:2px;
    border-radius:5px;
    width:auto;
    animation: ${divEnter} 1s;
}

a:hover{
    transform: scale(1.01);
    transition: 200ms;

}



@media (max-width:1000px){
    gap:2rem;
    flex-direction:column;
}
`

export const card = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:end;
text-align:center;
border:1px solid black;
background-color: rgb(40,40,40);
background-image: url(${(props) =>  props.IMG});
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
width:350px;
height: 450px;
z-index:3;
box-shadow: 5px 5px 12px rgb(0, 0, 0, 0.5);
font-family: 'Teko', sans-serif;





img{
    width:300px;
    height:300px;
}

p{
    color:white;
    font-size: 2.5rem;
    margin:3rem 1.6rem;
    font-weight:bolder;
}

span{
    display:none;
    opacity:0;
    margin: 1rem 1.6rem 3rem 1.6rem;
    color: white;
    animation: ${Show} 700ms;
    font-weight:bolder;
    font-size: 1.25rem;

}



&:hover{

    cursor:pointer;

   p{
    transform: scale(1.04);
    transition:250ms;
    margin: -0.5rem 1.6rem;
   }

   span{
    display:flex;
    opacity:1;
   }
}

@media (max-width:1150px){
    width:300px;
}

@media (max-width: 1000px){
    width:80vw;
}

`

export const cardHoverModal = styled.div`
display:flex;
opacity:0;
width:350px;
height:100%;
margin-bottom: -8.45rem;
background-color:rgba(255, 0, 0, 0.200);
z-index:4;

&:hover{
    transition:600ms;
    opacity:1;
    display:flex;
 
    
}


@media (max-width: 1000px){
    width:85%;
}

@media (max-width:1150px){
    width:300px;
}


@media (max-width: 1000px){
    width:80vw;
}

`
