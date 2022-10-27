import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
margin: auto;
`;

export const CartContainer = styled.div`
display: block;
/* border: 2px solid red; */
`

export const CartWrapper = styled.div`
/* border: 2px solid red; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;

h3{
    font-size: 30px;
    color: gray;
}
`

export const Button = styled(Link)`
background: #0e880ec2;
color: white;
padding: 10px;
text-decoration: none;
border-radius: 10px;
`;