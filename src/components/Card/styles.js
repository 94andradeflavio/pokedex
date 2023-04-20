import styled from "styled-components"
import { desaturate, darken } from 'polished'

export const CardContainer = styled.div`
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
            }
        }
    }
`

export const Card = styled.div`
    /* background: linear-gradient(right, ${props => props.color} 0%, #fff0); */
    background: linear-gradient(180deg, ${props => desaturate(.2, props.color)}, rgba(255,255,255,0) 90%);
    padding: 2rem;
    border-radius: 1rem;
    transform: scale(.8);
    transition: transform .1s linear;
    position: relative;
    box-shadow: 3px 3px 1px 1px #d3d3d3;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    min-height: 17rem;


    color: ${props => darken(.3, props.color)};

    cursor: pointer;

    img {
        width: 7rem;
        transition: transform .5s linear;
    }

    h3 {
        margin-top: 1rem;
        font-size: ${props => props.theme.main.text.subtitle};
        text-transform: capitalize;
    }

    &:hover {
        transform: scale(1);
        img {
            transform: scale(1.1);
        }
    }

    &::before {
        content: '# ${ props => props.id }';
        font-size: calc(${ props => props.theme.main.text.fontSize } + .5rem);
        font-weight: 700;
        
        position: absolute;
        top: .5rem;
        right: .5rem;
    }
`