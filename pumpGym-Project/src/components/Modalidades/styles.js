import styled from "styled-components"

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

@media (max-width:1000px){
    flex-direction:column;
}
`

export const card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
border:1px solid black;
background-color: rgb(40,40,40);
background-image: url(https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg);
width:350px;
height: 450px;


img{
    width:300px;
    height:300px;
}

`
