import styled from "styled-components"

export const divContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2rem 1rem;
gap:2rem;
background-color:rgb(240,240,240);

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
background-image: url(https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg);
width:500px;
height: 500px;



a{
    text-decoration:none;
    padding:1rem;
    background-color:red;
    color:white;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 16px;
    font-size:1.5rem;
    z-index:3;
}

h1{

    z-index:3;
}




`
export const contatoContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
background-image: url(https://i.pinimg.com/550x/5c/5b/2f/5c5b2f89f2939fda5802636663ba1cd4.jpg);

width:500px;
height: 500px;





`