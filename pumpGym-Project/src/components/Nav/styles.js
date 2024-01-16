import styled, {keyframes} from "styled-components"

const slideFromRight = keyframes`
0%{
    opacity:0.8;
    transform: translate(-100%, -50%);
}
100%{
    opacity:1;
    transform: translate(-50%, -50%);

}`




export const NavContainer = styled.nav`
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
padding: 0.6em 0em;
position: fixed;
background-color: white;
width:100%;
border-bottom: 0.75px solid black;
box-shadow: 3px 3px 3px rgb(0, 0, 0, 0.5);
z-index:10;
font-family: 'Nunito', sans-serif;


a{
    text-decoration: none;
    color:black;
}

`

export const Logo = styled.div `
display:flex;
font-size:4rem;
align-items:center;
margin-left:1.5rem;
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

a{
    text-decoration:none;
    color:black;
    font-weight:bolder;
    padding: 3px 0px;

   
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
    }

    span:hover{
        cursor:pointer;
        color:black;
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
    padding-right: 10px;
    padding-top: 10px;
    animation: ${slideFromRight} 500ms;
    position: fixed;
    top: 50%;
    left: 30%;
    z-index: 5;
    transform: translate(-50%, -50%);
    text-align: center;
    height: 100vh;
    width: 60%;
    visibility:${(props) => (props.isVisible ? "visible": "hidden")};
    opacity:${(props) => (props.isVisible ? "1": "0")};


    span{
        font-size: 2rem;
    }

    span:hover{
        cursor:pointer;
        transition:250ms;
        transform: scale(1.1);
        color:black;

    }

    @media (min-width:1000px){
        visibility: hidden;
        opacity: 0;
    }

    

`


