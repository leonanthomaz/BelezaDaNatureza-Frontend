import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 2px solid green;
height: 60px;
`;

export const Menu = styled.ul`
/* border: 2px solid red; */
display: flex;
justify-content: center;



@media(max-width: 450px){
    flex-direction: column;
    background: red;
    position: absolute;
    z-index: 999;
    left: ${({click}) => (click ? '0' : '-200px') };
    /* left: -200px; */
}
`;

export const Nav = styled.li`
/* border: 2px solid red; */
margin: 10px;
`;

export const Left = styled.div`
`;

export const Center = styled.div`
`;

export const Right = styled.div`
display: flex;
justify-content: space-between;
`;

export const LogoContainer = styled.div`
position: absolute;

`;

export const Logo = styled.div`
position: relative;
z-index: 99;
width: 200px;
left: 30px;
border-radius: 50%;
border: 3px solid #0e880ec2;
bottom: 50px;
background: #eeeeee;

img{
    width: 100%;
}

@media(max-width: 760px){
    width: 100px;
    left: 10px;
}

`
