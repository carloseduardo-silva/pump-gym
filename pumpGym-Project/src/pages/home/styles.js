import styled from "styled-components";

export const advertisementContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-image: url('../../../public/contatoContainer.png');
background-size: cover;
background-repeat: no-repeat;
box-shadow: inset 40px 80px 3rem rgba(0, 0, 0, 0.725);
width: 100%;
height: 100vh;
text-align:center;
font-family: 'Nunito', sans-serif;



h1{
    color:white;
    margin:0px 1.25rem;
    font-family: 'Teko', sans-serif;
    font-size: 3.5rem;


}

p{
    font-family: 'Teko', sans-serif;
    color:white;
    margin-bottom:10px;
    letter-spacing: 5px;
    font-size: 1.5rem;
}

span{
    color:red;
}

a{
    text-decoration: none;
    color: white;
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

    background-position: right right;

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