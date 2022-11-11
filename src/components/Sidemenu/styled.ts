import styled from 'styled-components'

export const StyledSideMenuWrapper = styled.div`
    background-color: var(--secondaryBackgroundColor);
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: column;
    height: 100vh;

    a {
        font-size: var(--bigFontSize);
        padding: 0.5rem;
        text-decoration: none;
        color: black;
    }

    .active {
        background-color: var(--primaryBackgroundColor);
    }
`
