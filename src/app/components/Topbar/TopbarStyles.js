import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: flex-end;
height: 40px;

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
    color: #141414;
    text-decoration: none;
}

@media(max-width: 760px){
    font-size: 14px;
}

@media(max-width: 450px){
    font-size: 12px;
}
`;

export const Nav = styled.li`
margin: 5px;
text-decoration: none;

`;

