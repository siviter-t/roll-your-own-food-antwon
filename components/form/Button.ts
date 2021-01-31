import styled from "styled-components";

export const Button = styled.button`
    font-size: 1.2em;
    padding: 0.2em 1em;

    border-radius: 0.5em;
    outline: none;
    text-align: center;
    text-decoration: none;
    font-style: italic;
    letter-spacing: 0.02em;

    color: ${props => props.theme.one};
    border: 2px solid ${props => props.theme.two};
    background: ${props => props.theme.two};

    &:hover {
        color: ${props => props.theme.two};
        border: 2px solid ${props => props.theme.two};
        background: ${props => props.theme.one};
    }
    &:active {
        color: ${props => props.theme.one};
        border: 2px solid ${props => props.theme.two};
        background: ${props => props.theme.three};
    }
`;
