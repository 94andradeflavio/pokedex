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

    .modal-overlay {
        background-color: rgba(0,0,0, .5);
        backdrop-filter: blur(20px);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;

        display: flex;
        align-items: center;
        justify-content: center;

        .main-modal-content {
            width: 100%;
            max-width: 40rem;
            padding: 2rem;
            margin: 1rem;
            background: ${props => props.theme.main.color.white};
            outline: none;
            border-radius: 1rem;

            display: flex;
            align-items: center;
            gap: 2rem;

            img {
                height: 10rem;
            }

            h2 {  
                font-size: ${props => props.theme.main.text.title};
                text-transform: capitalize;
                margin-bottom: 1rem;

                & + p {
                    margin-bottom: 1rem;
                }
            }

            h6 {
                margin-bottom: .5rem;
            }

            .types {
                display: flex;
                gap: .5rem;
                p {
                    padding: .1rem .5rem;
                    border-radius: 1rem;
                    color: ${props => props.theme.main.color.white};
                    font-weight: 700;
                    &.normal { background-color: #a8a77a; }
                    &.fire { background-color: #EE8130; }
                    &.water { background-color: #6390F0; }
                    &.electric { background-color: #f7d02c; }
                    &.grass { background-color: #7ac74c; }
                    &.ice { background-color: #96d9d6; }
                    &.fighting { background-color: #c22e28; }
                    &.poison { background-color: #a33ea1; }
                    &.ground { background-color: #e2bf65; }
                    &.flying { background-color: #a98ff3; }
                    &.psychic { background-color: #f95587; }
                    &.bug { background-color: #a6b91a; }
                    &.rock { background-color: #b6a136; }
                    &.ghost { background-color: #735797; }
                    &.dragon { background-color: #6f35fc; }
                    &.dark { background-color: #705746; }
                    &.steel { background-color: #b7b7ce; }
                    &.fairy { background-color: #d685ad; }
                }
            }
        }
    }

    @media screen and (max-width: 600px) {
        .main-modal-content {
            flex-direction: column;
            max-height: 100vh;
        }
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