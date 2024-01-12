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

export const contatoContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
text-align:center;
background-color: rgb(252, 32, 32);
width:500px;
height: 500px;



a{
    text-decoration:none;
    padding:1rem;
    background-color:rgb(252, 32, 32);
    color:white;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 16px;
    font-size:1.5rem;
    z-index:3;
}

h1{

    margin: 3.5rem 0rem 1rem 0rem;
}

@media (max-width: 600px){
    width:80%;


    h1{
        margin: 1rem;
        font-size: 1.75rem;
    }

    a{
        font-size: 1.25rem;
    }
}




`
export const planosContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
background-image: url(${(props) => props.IMG});
text-align:center;
width:500px;
height: 500px;

p{
    font-weight:bolder;
    margin:0.5rem;
}

@media (max-width: 600px){
    width:80%;

    h1{
        margin: 0rem 1rem;
        font-size: 1.75rem;
    }

    p{
        font-size: 1rem;
        
    }

    
}



`