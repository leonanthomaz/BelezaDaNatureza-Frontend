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
/* border: 2px solid red; */
display: flex;
flex-direction: row;
list-style: none;
font-size: 16px;
font-weight: 500;
`;

export const Nav = styled.li`
/* border: 2px solid red; */
margin: 5px;
text-decoration: none;
`;

