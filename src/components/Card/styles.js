import styled from "styled-components"
import { desaturate, darken } from 'polished'

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
    width: 300px;


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