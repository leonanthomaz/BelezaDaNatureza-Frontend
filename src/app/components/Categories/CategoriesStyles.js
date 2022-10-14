import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 2px solid green;
height: 60px;

@media(max-width: 760px){
    flex-direction: row-reverse;
}
`;

export const Menu = styled.ul`
/* border: 2px solid red; */
display: flex;
justify-content: center;
list-style: none;



@media(max-width: 760px){
    flex-direction: column;
    background: red;
    position: absolute;
    z-index: 999;
    left: ${({click}) => (click ? '0' : '-200px') };
    transition: all ease-in-out 0.2s;
    /* left: -200px; */
}
`;

export const Nav = styled.li`
/* border: 2px solid red; */
margin: 10px;
`;

export const Left = styled.div`
width: 150px;
`;

export const Center = styled.div`

`;

export const Right = styled.div`
display: flex;
justify-content: space-between;
border: 2px solid red;

@media(max-width: 760px){
    flex-direction: column;
}

`;

export const LogoContainer = styled.div`
position: absolute;
z-index: 9999;
width: 150px;

@media(max-width: 760px){
    width: 100px;
}
`;

export const Logo = styled.div`
 /* position: relative;
 bottom: 30px; */
 /* border-radius: 50%;
 border: 3px solid #0e880ec2;
 background: #eeeeee; */

 /* border-radius: 50%;
 border: 3px solid #0e880ec2;
 background: #eeeeee; */

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

@media(max-width: 450px){
    width: 80px;
    height: 80px;
    bottom: 25px;
    left: 50px;
    
    img{
        width: 80px;
    }
}

`

export const Icons = styled.div`
display: flex;
flex-direction: row;

/* @media(max-width: 760px){
    flex-direction: column;
} */

`
