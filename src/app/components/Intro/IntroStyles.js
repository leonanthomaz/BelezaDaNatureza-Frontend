import styled from "styled-components";

export const Container = styled.div`
height: auto;
`;

export const SplideContainer = styled.div`
z-index: 1;
max-width: 1200px;
height: auto;
margin: auto;

@media (max-width: 900px){
    max-width: 600px;
}

@media (max-width: 760px){
    max-width: 400px;
}

@media (max-width: 500px){
    max-width: 300px;
}

img{
    width: 100%;
    border-radius: 20px;

}
`;
