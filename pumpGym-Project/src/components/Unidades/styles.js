import styled from "styled-components";


export const unidadesContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
padding:4em 2em;

`

export const title = styled.div`
display:flex;
align-items:center;


`
export const cardUnityContainer = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
max-width: 900px;
align-items:center;
justify-content:center;
gap:1em;


@media (min-width:1350px){
    gap: 5em;
    max-width:1100px
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


img{
    width:260px;
    height:350px;
}

p{
    font-size: 1.5rem;
    padding: 1.5em 0em;
}

`