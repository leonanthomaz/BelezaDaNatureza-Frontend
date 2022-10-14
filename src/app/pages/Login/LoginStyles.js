import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
padding: 20px;

`;

export const Box = styled.form`
    margin: auto;
    max-width: 500px;
    height: auto;
    box-shadow: 0.4em 0.3em 0.7em black; 
    border-radius: 10px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    display: flex;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    padding: 5px;
`;

export const Input = styled.input`
    color: green;
    border: 1px solid #141414;
    outline: none;
    width: 300px;
    padding: 10px;
    font-size: 16px;
    margin: 10px;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;
    -webkit-appearance:none;

    :focus{
        border: 2px solid red;
        color: white;
        border-radius: 5px;
    }
`;

export const Button = styled.button`
    width: 100px;
    padding: 5px;
    text-decoration: none;
    background: red;
    color: white;
    transition: all ease 0.5s;
    border-radius: 5px;
    cursor: pointer;
    :hover{
    background: white;
    border: 2px solid white;
    color: red;
    transition: all ease 0.5s;
    }
`;

