import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";

export const Container = styled.div`
display: flex;
justify-content: flex-end;
height: 40px;
/* border: 2px solid red; */
align-items: center;

@media(max-width: 760px){
    justify-content: flex-start;
}

`;

export const Menu = styled.ul`
display: flex;
flex-direction: row;
list-style: none;
font-size: 16px;
font-weight: 500;

a{
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    margin: 5px;
    color: gray;

    :hover{
        color: #141414;
    }

    @media(max-width: 450px){
        font-size: 12px;
    }
}

`;

export const Nav = styled(NavLink)`
text-decoration: none;
`;

export const IconsContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
font-size: 25px;
margin: 10px;

@media(max-width: 760px){
    flex-direction: row;
}

`

export const IconUser = styled(AiOutlineUser)`
margin: 5px;
color: #141414;
font-size: 25px;

`
