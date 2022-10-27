import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom'

export const Container = styled.div`
display: flex;
flex-direction: column;
/* border: 2px solid green; */

`;

export const Wrapper = styled.div`
display: flex;
/* border: 2px solid red; */
width: 500px;
`;

export const Left = styled.div`
flex-wrap: nowrap;
flex: 1;
display: flex;
align-items: center;

.cart-img-container{
    width: 150px;
    height: 150px;
    border-radius: 10px;

    img{
        width: 150px;
        height: 150px;
        border-radius: 10px;
    }
}
`;

export const Right = styled.div`
/* border: 2px solid yellow; */
flex-wrap: wrap;
flex: 3.5;
padding: 10px;

h2{
    font-size: 25px;
    color: gray;
}

h4{
    font-size: 18px;
}

span{
    font-size: 18px;
}
`;

export const Total = styled.div`

`;

export const ButtonContainer = styled.div`
display:  flex;
flex-direction: row;
`;

export const Button = styled(Link)`
background: #0e880ec2;
color: white;
padding: 10px;
text-decoration: none;
border-radius: 10px;

`;

export const IconPlus = styled(AiOutlinePlus)`
background: #0e880ec2;
color: white;
padding: 10px;
border-radius: 50%;
margin: 5px;

`;

export const IconMinus = styled(AiOutlineMinus)`
background: red;
color: white;
padding: 10px;
border-radius: 50%;
margin: 5px;

`;

export const IconClose = styled(AiOutlineClose)`
background: red;
color: white;
padding: 10px;
border-radius: 50%;
margin: 5px;
`;

