import styled from "styled-components";
import {keyframes} from "styled-components";

const divEnter = keyframes`

0%{
    opacity:0;
    transform: translate(-50%, -10%);

}
100%{
    opacity:1;
    transform: translate(0%, 0%);
}
`


 const Show = keyframes`
0%{
    opacity:0.8;
    transform: translate(0%, 200%);
}
100%{
    opacity:1;
    transform: translate(0%, 0%);


`


export const title = styled.div`

h1{
    margin: 11rem auto 1.5rem;
    font-family: 'Teko', sans-serif;
    font-size: 3.25rem;
    font-weight: 500;
    max-width: 1000px;
    text-align:center;
    padding: 0rem 2rem;
}

@media (max-width: 1000px){
  h1{
    padding: 0rem 2rem;
    margin: 10rem auto 0rem;
  }
}

@media (max-width: 550px){
    h1{
        padding: 0rem 0.5rem;
        font-size: 11vw;
    }
  }

`

export const modalidadesContainer = styled.div`
display:flex;
flex-direction:row;
padding:2rem 1rem;
justify-content:start;
align-items:start;
text-align:center;





a{
    
    text-decoration:none;
    padding:0.65rem 1.75rem;
    background-color:white;
    color:white;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 16px;
    font-size:2rem;
    font-family: 'Teko', sans-serif;
    width:160px;
    margin: 2rem auto;

}

a:hover{
    transform: scale(1.02);
    transition:350ms;
}


@media (max-width: 600px) {
    h1{
        font-size:3.2rem;
    }
}

@media (max-width: 1000px){
    flex-direction:column;
    align-items:center;
}

`
export const modalidadesHeader = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-image: url('./fundoModalidades.png');
background-size: cover;
background-repeat: no-repeat;
box-shadow: inset 40px 80px 3rem rgba(0, 0, 0, 0.725);
width: 100%;
height: 100vh;
font-family: 'Teko', sans-serif;

h1{
    color:white;
    padding: 1rem 3.5rem;
    background-color: rgb(5, 5, 5, 0.2);
    border-radius: 30px;
    border: 1px solid rgb(240, 10, 10);
    font-size:4.25rem;

}

h1:hover{
    border: 1px solid white;
    transition: 250ms;
    cursor: pointer;
}

@media (max-width:600px){
    h1{
        font-size:3.25rem;
    }
}

@media (max-width:430px){
    h1{
        font-size:2.25rem;
    }
}

`

export const cardContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
align-items:center;
justify-content:start;
margin:1rem 0rem;

& a{
    text-decoration: none;
    border-radius:5px;
    width:${(props) => props.width};
    animation: ${divEnter} 1s;
    padding: 0px;
    margin: 0.5rem;
}



@media (max-width:1000px){
    
    flex-direction:column;
   
    width:100%;

    a{
        width:80vw;
    }
}

@media (max-width:500px){
    
    a{
        width:90vw;
    }
}
`

export const cardAsideNav = styled.nav`
display:flex;
flex-direction:column;
text-align: left;
gap: 0.95rem;
font-family: 'Teko', 'Sans-Serif';
padding: 2.25rem 1rem 1rem 0.5rem;


span{
    font-size: 1.6rem;
    padding: 0.25rem 3rem;
    color: rgb(80, 80, 80);
}

span:hover{
    cursor:pointer;
    border-left: 2px solid rgb(240, 10, 10);
    
}

.active{
    border-left: 2px solid rgb(240, 10, 10);
}

@media (max-width: 1000px){
    flex-direction:row;
    flex-wrap: wrap;
    text-align:center;
    align-items:center;
    justify-content: center;
    padding: 1.5rem 1.75rem 0.3rem 1.75rem;


    span{
        font-size: 1.75rem;
        padding: 0.5rem;
    }
    
    span:hover{
        cursor:pointer;
        border-bottom: 2px solid rgb(240, 10, 10);
        border-left: none;
        
    }

    .active{
        border-bottom: 2px solid rgb(240, 10, 10);
        border-left: none;
    }

}

@media (max-width: 500px){
    padding: 1.5rem 0rem 0.3rem 0rem;
}
`

export const card = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:end;
text-align:center;
border:1px solid black;
background-color: rgb(40,40,40);
background-image: url(${(props) =>  props.IMG});
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
width:100%;
height: 450px;
font-family: 'Teko', sans-serif;





img{
    width:400vw;
    height:300px;
}

p{
    color:white;
    font-size: 2.5rem;
    margin:3rem 1.6rem;
    font-weight:bolder;
}

span{
    display:none;
    opacity:0;
    margin: 1rem 1.6rem 3rem 1.6rem;
    color: white;
    animation: ${Show} 700ms;
    font-weight:bolder;
    font-size: 1.25rem;

}



&:hover{

    cursor:pointer;

   p{
    transform: scale(1.04);
    transition:250ms;
    margin: -0.5rem 1.6rem;
   }

   span{
    display:flex;
    opacity:1;
   }
}





`

export const cardHoverModal = styled.div`
display:flex;
opacity:0;
width:100%;
height:100%;
margin-bottom: -8.45rem;
background-color:rgba(255, 0, 0, 0.200);
z-index:4;

&:hover{
    transition:500ms;
    opacity:1;
    display:flex;
 
    
}








`
