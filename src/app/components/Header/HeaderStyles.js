import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
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
    align-items: center;
    width: 200px;
    padding: 20px;
    margin-top: 30px;
    background: green;
    position: absolute;
    z-index: 999;
    left: ${({click}) => (click ? '0' : '-250px') };
    transition: all ease-in-out 0.2s;
}
`;

export const Nav = styled.li`
/* border: 2px solid red; */
margin: 10px;

a{
    color: #141414;
    text-decoration: none;
}

@media(max-width: 760px){
    a{
        color: white;
    }
}


`;

export const Left = styled.div`
width: 150px;
`;

export const Center = styled.div`

`;

export const Right = styled.div`
display: flex;
justify-content: space-between;

@media(max-width: 760px){
    flex-direction: column;
}

`;

export const LogoContainer = styled.div`
position: absolute;
z-index: 9999;
width: 120px;

@media(max-width: 760px){
    width: 100px;
}
`;

export const Logo = styled.div`

position: relative;
z-index: 99;
width: 150px;
left: 30px;
border-radius: 50%;
border: 3px solid #0e880ec2;
bottom: 65px;
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
align-items: center;
font-size: 25px;
margin: 10px;

@media(max-width: 760px){
    flex-direction: row;
}

`


export const IconMenu = styled(BiMenu)`

font-size: 30px;

@media(min-width: 760px){
   display: none;
}
`
export const IconClose = styled(AiOutlineClose)`

`

export const IconSacola = styled(BsBag)`
margin: 5px;

`

export const IconSearch = styled(BsSearch)`
margin: 5px;
`

export const IconUser = styled(AiOutlineUser)`
margin: 5px;

`

