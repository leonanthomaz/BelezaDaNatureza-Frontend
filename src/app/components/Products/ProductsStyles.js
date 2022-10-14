import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover{
        color: red;
    }
`;

export const Container = styled.div`

display: grid;
grid-template-columns: 300px 300px 300px;
justify-content: center;
text-align: center;

@media(max-width: 760px){
    grid-template-columns: 200px 200px 200px;
}

@media(max-width: 760px){
    display: flex;
    flex-direction: column;
    align-items: center;
}

`

export const Box = styled.div`

/* border: 2px solid red; */
display: flex;
flex-direction: column;
width: 300px;
box-shadow: 2px 2px 4px 2px gray;
gap: 10px;
margin: 5px;
`

export const Title = styled.h1`
font-size: 25px;

`
export const Stars = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Description = styled.span`
font-size: 18px;

`

export const Price = styled.p`
font-size: 18px;
`

export const Button = styled.button`

`