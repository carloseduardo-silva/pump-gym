import styled, {keyframes} from "styled-components"

const slideFromRight = keyframes`
0%{
    opacity:0.8;
    transform: translate(0%, -50%);
}
100%{
    opacity:1;
    transform: translate(-50%, -50%);

}`

const navItemHover = keyframes`
0%{
    opacity:0.8;
    width:3px;
}
25%{
    width:15px;
}
50%{
    width:40px;
}
75%{
    width:60px;
}
85%{
    width:80px;
}
100%{
    opacity:1;
    width:auto;

}`




export const NavContainer = styled.nav`
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
padding: 0.6em 0em;
position:${(props) => props.navPosition};
background-color:transparent;
width:100%;
z-index:10;
font-family: 'Nunito', sans-serif;


&.whiteNav{
    
    box-shadow: 0.5px 5px 12px rgb(0, 0, 0, 0.25);
    background-color:white;
    padding: 0.25em 0em;
}


a{
    text-decoration: none;
    color:${(props) => props.linkColor};
    
}





`

export const Logo = styled.div `
display:flex;
font-size:4rem;
align-items:center;
margin-left:2rem;
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


export const NavItens = styled.div `
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
gap: 2.25em;
font-size:1rem;
margin-right:1.5rem;



.active{
    border-bottom: 2px solid rgb(240, 10, 10);
    border-radius:4px;
}

.matricula:hover::after{
    display:none;
}


a{
    text-decoration:none;
    color:${(props) => props.linkColor};
    font-weight:bolder;
   
}

a:hover::after{
    display:block;
    content: '';
    width:auto;
    height:1.6px;
    margin-top: 4px;
    background-color: rgb(240, 10, 10);
    animation: ${navItemHover} 220ms;
}

a:hover{

    cursor:pointer;
    transform: scale(1.05);
    transition:250ms;
  
}

span{
    color:white;
    background-color:rgb(240, 10, 10);
    padding:0.75em;
    border-radius: 30px;
}



@media (max-width: 1000px) {
    display:none;
    opacity:0;
}
`

export const menuHamburguer = styled.div`
    display:none;
    opacity:0;
    margin:0rem 1rem;


    span{
        font-size:2rem;
        color:${(props) => props.linkColor};
    }

    span:hover{
        cursor:pointer;
        
    }

    @media (max-width: 1000px){
        display:flex;
        opacity:1;
    }
`


export const navModal = styled.div`
    display: ${(props) => (props.isVisible) ? "flex" :" none" };
    background-color:white;
    color: rgb(240, 10, 10);
    justify-content: start;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
    animation: ${slideFromRight} 300ms;
    position: fixed;
    top: 50%;
    left: 76%;
    z-index: 5;
    transform: translate(-50%, -50%);
    text-align: center;
    height: 100vh;
    width: 40%;
    visibility:${(props) => (props.isVisible ? "visible": "hidden")};
    opacity:${(props) => (props.isVisible ? "1": "0")};


    header{
        margin: 3rem 1rem;
    }

    span{
        font-size: 2rem;
    }

    span:hover{
        cursor:pointer;
        transition:250ms;
        transform: scale(1.1);
        

    }

    @media (min-width:1000px){
        visibility: hidden;
        opacity: 0;
    }

    @media (max-width:540px){
        width:50%;
        left:66%;
    }

    

`

export const navModalItens = styled.div `
display:flex;
flex-direction: column;
align-items:center;
width:100%;
justify-content: space-around;
gap: 2.75em;
margin-right:0.25rem;


.active{
    border-bottom: 2px solid rgb(240, 10, 10);
    border-radius:4px;
}

a{
    text-decoration:none;
    color:black;
    font-weight:bolder;
    padding: 3px 0px;
    font-size:1rem;

   
}

a:hover{

    cursor:pointer;
    transform: scale(1.1);
    transition:250ms;
    border-bottom: 1px solid rgb(240, 10, 10);
    border-radius: 4px;
}

span{
    color:white;
    background-color:rgb(240, 10, 10);
    padding:0.75em;
    border-radius: 30px;
    font-size:1rem;
}


`




