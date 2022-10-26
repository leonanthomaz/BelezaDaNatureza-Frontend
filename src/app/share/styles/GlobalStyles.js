import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  /* font-family: 'Josefin Sans', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eeeeee;
  font-family: 'Montserrat', sans-serif;

  /* font-family: 'Dela Gothic One', cursive;
  font-family: 'Lobster', cursive;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-family: 'Wendy One', sans-serif; */
}

.App{
    max-width: 1200px;
    margin: auto;
}

`;