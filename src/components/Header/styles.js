import styled from "styled-components";

export const HeaderContent = styled.header`
    width: 100%;
    padding: 1rem 2rem;
    background: ${props => props.theme.main.color.secondary};
    color: ${props => props.theme.main.color.white};

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: 0;

    z-index: 999;

    img {
        height: 100%;
        max-height: 3rem;
    }

    @media screen and (max-width: 460px){
        flex-direction: column;
        gap: 1rem;
    }
`

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`