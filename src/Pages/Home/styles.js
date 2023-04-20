import styled from "styled-components";

export const Home = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    h2 {
        font-size: ${ props => props.theme.main.text.title };
        color: ${ props => props.theme.main.color.secondary };
        margin-bottom: 2rem;
    }
`

export const ItensContainer = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-around;
    gap: .5rem;
`