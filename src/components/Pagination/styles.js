import styled from "styled-components";

export const Pagination = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    button {
        font-size: 2rem;
        color: ${ props => props.theme.main.color.secondary };
        border: none;
        background: none;

        cursor: pointer;

        &:first-child {
            transform: scaleX(-1);
            &:hover {
                transform: scale(1.1) scaleX(-1);
            }
        }
        &:hover {
            transform: scale(1.1);
        }
    }
`