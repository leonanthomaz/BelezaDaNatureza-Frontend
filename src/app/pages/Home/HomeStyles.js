import styled from "styled-components";

export const Container = styled.div`
/* border: 2px solid red; */

margin: auto;


.home-container-bird{
    height: auto;
    background-attachment: fixed;
    background-size: contain;
    
    .home-container-opacity{
        height: 100%;
        background-color: rgba(255, 255, 255, 0.80);
    }
}
`;

export const Wrapper = styled.div`
display: grid;
grid-template-columns: auto auto auto;
display: flex;
justify-content: space-around;
align-items: center;
padding: 5px;
margin: 0 auto;

@media(max-width: 650px){
    display: flex;
    flex-direction: column;
}
`;

export const Items = styled.div`
/* border: 2px solid red; */
/* width: 150px; */
padding: 5px;

.home-items-container{
    display: flex;
    flex-direction: column;
    text-align: center;

    .home-items-container-header{
        font-size: 16px;
    }
    
    .home-items-container-body{
        font-size: 12px;
    }
}
`;