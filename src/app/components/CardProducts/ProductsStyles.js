import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`

/* border: 2px solid red; */
display: flex;
flex-direction: column;
width: 300px;
/* box-shadow: 2px 2px 3px 2px gray; */
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
border-radius: 7px;
gap: 5px;
margin: 15px;

`

export const Title = styled.h1`
font-size: 20px;

`
export const Stars = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Img = styled.div`
width: 250px;
height: 250px;
margin: auto;
img{
    width: 100%;
}
`

export const Description = styled.span`
font-size: 16px;

`

export const Price = styled.p`
font-size: 14px;
`

export const Button = styled.button`

`
export const NavLink = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover{
        color: red;
    }
`;