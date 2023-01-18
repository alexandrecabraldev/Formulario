import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${props=>props.theme.lightBlue}
    }

    *{
        margin:0;
        padding: 0;
    }

    input{
        box-sizing: border-box;
    }

`;
