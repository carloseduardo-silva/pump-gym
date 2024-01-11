import styled from "styled-components";


export const unidadesContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
padding:4em 2em;

a{
    text-decoration:none;
    padding:1rem;
    background-color:red;
    color:white;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 16px;
    font-size:1.5rem;

}

a:hover{
    transform: scale(1.1);
    transition:250ms;
}

@media (max-width: 600px){
    a{
        font-size:1.25rem;
    }
}
`

export const title = styled.div`
display:flex;
align-items:center;
text-align:center;
margin:2em 1em;


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

@media (max-width: 650px){
    width:90%;
}
img{
    width:99%;
}

`

