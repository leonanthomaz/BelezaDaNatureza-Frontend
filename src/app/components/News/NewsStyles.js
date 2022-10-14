import styled from "styled-components";

export const Container = styled.div`

`;

export const CardContainer = styled.div`
display: grid;
grid-template-columns: 300px 300px 300px;
justify-content: center;
text-align: center;

@media(max-width: 760px){
    grid-template-columns: 200px 200px 200px;
}

@media(max-width: 760px){
    display: flex;
    flex-direction: column;
    align-items: center;
}

`;
