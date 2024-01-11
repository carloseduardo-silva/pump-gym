import styled from "styled-components";

export const advertisementContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:rgb(20,20,20);
width: 100%;
height: 90vh;
text-align:center;


h1{
    color:white;
    padding-bottom:3rem;
    margin:0px 1.25rem;


}

p{
    color:white;
    margin-bottom:10px;
    
    letter-spacing: 5px;
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
`