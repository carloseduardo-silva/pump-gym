import styled, {keyframes} from "styled-components"


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
padding:2rem 1rem 6rem 1rem;
justify-content:center;
text-align:center;

h1{
    margin: 4rem 0rem;
}
`



export const cardContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
gap:2rem;
margin:1rem 0rem;

a{
    text-decoration: none;
}

@media (max-width:1000px){
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




img{
    width:300px;
    height:300px;
}

p{
    color:white;
    font-size: 1.75rem;
    margin:3rem 1.25rem;
    font-weight:bolder;
}

span{
    display:none;
    opacity:0;
    margin: 1rem 1.25rem 3rem 1.25rem;
    color: white;
    animation: ${Show} 700ms;
    font-weight:bolder;

}



&:hover{

    cursor:pointer;

   p{
    transform: scale(1.04);
    transition:250ms;
    margin: 0rem 1.25rem;
   }

   span{
    display:flex;
    opacity:1;
   }
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
margin-bottom: -7.75rem;
background-color: rgba(248, 37, 37, 0.200);
z-index:4;

@media (max-width: 1000px){
    width:85%;
}

&:hover{
    transition:600ms;
    opacity:1;
    display:flex;
 
    
}

@media (max-width: 1000px){
    width:80vw;
}

`
