import styled from "styled-components"


export const NavContainer = styled.nav`
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
padding: 2.5em 2em;
`

export const Logo = styled.div `
display:flex;
font-size:2rem;


span {
    color:red
}
`


export const NavItens = styled.div `
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
gap: 2em;
font-size:1.2rem;



a{
    text-decoration:none;
    color:black;
}

span{
    color:red;
    border:1px solid black;
    padding:1em;
    border-radius: 30px;
}
`