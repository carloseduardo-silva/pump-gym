import styled from "styled-components";

export const advertisementContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:rgb(240, 240, 240);
width: 100%;
height: 99vh;
text-align:center;
font-family: 'Nunito', sans-serif;



h1{
    color:black;
   
    margin:0px 1.25rem;


}

p{
    color:black;
    margin-bottom:10px;
    letter-spacing: 5px;
    padding-top:4rem;
}

span{
    color:red;
}

@media (max-width: 768px){
 p{
    font-size:14px;
    

}
h1{
    font-size: 30px;
}
}


@media (max-width: 1000px){
    p{
       display:none;
       opacity:0;
    }
    h1{
        margin-top: 5rem;
    }
}
`
export const mobileTitle = styled.h3`
    display:none;
    opacity:0;
    color:white;
    background-color:red;
    border:1px solid black;
    padding:0.75em;
    border-radius: 30px;
    margin-top:1rem;

    &:hover{
        cursor:pointer;
        transition:250ms;
        transform: scale(1.1);

    }

    @media (max-width:1000px){
        display:flex;
        opacity:1;
    }
`