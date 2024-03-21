import styled, {keyframes} from "styled-components";


 const headerEnter = keyframes`
    from{
        opacity: 0.25;
        transform: translateY(-95%);
    }
    to{
        opacity: 1;
        transform: translateY(0%);
    }
`

export const advertisementContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-image: url('./contatoContainer.png');
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


@media (min-width: 768px){
    p{
        animation: 1.25s ${headerEnter};
       
   
   }
   h1{
        animation: 1.25s ${headerEnter};
   }
   }
   

@media (max-width: 768px){
 p{
    font-size:14px;
    

}
h1{
    font-size: 45px;
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
export const btnGoTop = styled.button`
    display:block;
    position: fixed; 
    bottom: 20px;
    right: 30px; 
    z-index: 99; 
    border: none; 
    outline: none; 
    background-color: rgb(0, 0, 0, 0.5); 
    color: white; 
    cursor: pointer; 
    padding: 5px 14px 5px; 
    border-radius: 10px;
   
  
  
  &:hover {
    background-color: rgb(0, 0, 0, 0.85); 
  }

  span{
    font-size:2.35rem;
    font-weight:bolder;
  }

`