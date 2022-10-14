import styled from "styled-components";

export const Container = styled.div`
/* border: 2px solid red; */
height: calc(100vh - 80px);

@media(max-width: 760px){
    height: auto;
    min-height: 300px;
}
`;

export const SplideContainer = styled.div`


img{
    width: 100%;
    max-height: 550px;
    min-height: 300px;
    z-index: 1;
}
`;