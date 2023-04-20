import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    padding: 1rem 2rem;
    background: ${props => props.theme.main.color.secondary};
    color: ${props => props.theme.main.color.white};
    text-align: center;

    position: relative;
    margin-top: auto;
`