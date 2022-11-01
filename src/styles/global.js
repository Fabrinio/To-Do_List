import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #012622;
        color: #9FFFCB;
        -webkit-font-smoothing: antialiased; //so funciona no MacOS
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem; //16px
    }

    input, textarea, button {
        cursor: pointer;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px #00875f;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.7;
    }


`;