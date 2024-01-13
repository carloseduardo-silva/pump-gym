import styled from "styled-components";

export const Footer = styled.footer`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
padding:1.5em 4em;
background-color: rgb(240,240, 240);
font-family: 'Nunito', 'Sans-serif';
font-size: 1.5rem;
color: black;
`

export const Logo = styled.div `
display:flex;
font-size:4rem;
align-items:center;
margin-left:1.5rem;
font-family: "Teko";
font-weight: bolder;
padding-bottom: 7px;

&:hover{
    cursor:pointer;
}

span {
    color:rgb(240, 10, 10);
}
`

export const infoContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
text-align: left;
margin: 1rem 3rem 1rem 1rem;


@media(max-width: 1000px){
    flex-direction:column;
}
`

export const info = styled.div`

display:flex;
flex-direction: column;
justify-content:space-around;
margin: 1rem 0rem;




h2{
    font-family: "Teko", "Sans-serif";
    font-size:1.5rem;
    margin: 0.5rem 0rem;
}

a{
    display: flex;
    gap:0.65rem;
    text-decoration: none;
    color:black;
    font-family: 'Nunito', 'Sans-serif';
    font-weight:500;
    font-size:1.25rem;
    margin: 0.25rem 0rem;

}



a:hover{
    color: rgb(110, 110, 110);
}
`