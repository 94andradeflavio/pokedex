import styled from "styled-components";

export const SearchBarArea = styled.div`
    display: flex;
    align-items: center;
    gap: .4rem;
`

export const SearchBar = styled.input`
    background: none;
    padding: .3rem;
    padding-bottom: 0;
    border: none;
    border-bottom: 1px solid ${props => props.theme.main.color.primary};
    color: ${props => props.theme.main.color.primary};
    font-size: ${props => props.theme.main.text.input};
    outline: none;
`

export const SearchButton = styled.button`
    font-size: ${props => props.theme.main.text.fontSize};
    background: ${props => props.theme.main.color.primary};
    padding: .3rem 1rem;
    border-radius: 3rem;
    border: 2px solid transparent;
    color: ${props => props.theme.main.color.secondary};
    font-weight: 700;

    transition: .3s linear;

    cursor: pointer;

    &:hover {
        color: ${props => props.theme.main.color.primary};
        background: ${props => props.theme.main.color.secondary};
        border: 2px solid ${props => props.theme.main.color.primary};
    }
`