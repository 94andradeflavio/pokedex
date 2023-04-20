import styled, { createGlobalStyle } from "styled-components";
import { darken } from 'polished'
export { hexToRgb } from '../../helpers/colourNameToHex'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        background: ${ (props) => props.theme.main.color.primary };
        background: linear-gradient(180deg, ${props => darken(.1, props.theme.main.color.primary)}, ${props => props.theme.main.color.primary} 100%);
    }

    a {
        text-decoration: none;
        color: ${ props => props.theme.main.color.white };
        font-size: ${ props => props.theme.main.text.fontSize };
    }

    .load {
        text-align: center;
        width: 100%;
        margin: auto 0;

        h2 { margin-bottom: 0; }
    }
`

export const App = styled.main`
    display: flex;
    flex-direction: column;

    min-height: 100vh;
`

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;

    position: relative;
    /* border: 1px solid black; */

    flex: 1;
`

export default GlobalStyle