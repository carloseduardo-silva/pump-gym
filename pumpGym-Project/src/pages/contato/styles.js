import styled from "styled-components";


export const contatoContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    gap:4rem;
    padding: 12rem 2rem;


    @media (max-width: 1000px){
        flex-direction: column;
    }

`

export const form = styled.form`
    display:flex;
    flex-direction: column;
    align-items:start;
    justify-content: flex-start;
    gap:2rem;


    h1{
        font-family: 'Teko', 'Sans-serif';
        font-size:3rem;
        
    }

    label{
        display: flex;
        flex-direction: column;
        width:98%;
        font-family: 'Nunito', 'Sans-Serif';
      

    }

    input{
        padding: 0.15rem 0rem;
        font-size: 1.2rem;
        font-family: 'Nunito', 'Sans-Serif';
        border: 0.4px solid rgb(195, 195, 195);
    }

    textarea{
        max-height: 200px;
        max-width: 580px;
        border: 0.4px solid rgb(195, 195, 195);
    }

    button{
        text-decoration:none;
        padding:0.5rem 1.5rem;
        background-color:rgb(240, 10, 10);
        color:white;
        border-bottom-right-radius: 16px;
        border-top-left-radius: 16px;
        font-size:1.5rem;
        font-family: 'Teko', sans-serif;
        margin: 1rem auto;
    }

    button:hover{
        cursor:pointer;
        transform: scale(1.08);
        transition: 250ms;
    }

    @media (max-width: 670px){
        align-items:center;
        justify-content: center;

        h1{
            text-align: center;
        }
        
        textarea{
            min-width:85vw ; 
            max-width: 86vw ;
        }
       
    }


`

export const contato = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: start;
    padding: 1rem 2.5rem;
    max-width:600px;
    height: 600px;
    background-color: white;
    border: 1px solid rgb(195, 195, 195);
    border-radius: 5px;




    h2{
        font-family: "Teko", "Sans-serif";
        font-size:1.5rem;
        margin: 1rem 0rem;
    }
    
    a{
        display: flex;
        gap:0.25rem;
        text-decoration: none;
        color:black;
        font-family: 'Nunito', 'Sans-serif';
        font-weight:500;
        font-size:1.25rem;
        margin: 0.5rem 0rem;
    
    }
    
    
    a:hover{
        color: rgb(110, 110, 110);
    }


    @media (max-width: 1000px){
        width: 85%;
    }

    @media (max-width: 670px){
        align-items: center;


    }

`

export const Logo = styled.div `
display:flex;
font-size:4rem;
align-items:center;
font-family: "Teko";
font-weight: bolder;
padding-top: 10px;

&:hover{
    cursor:pointer;
}

span {
    color:rgb(240, 10, 10);
}
`
