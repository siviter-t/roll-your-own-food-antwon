import styled from "styled-components";
import { lighten } from "polished";

interface Props {
    showInvalidation: boolean;
}

export const TextInput = styled.input.attrs<Props>({
    type: "text"
})<Props>`
    font-size: 1em;
    padding: 0.2em 2em 0.2em 0.8em;
    color: ${props => props.theme.two};
    background: ${props => lighten(0.075)(props.theme.one)};
    border: 0.13em solid ${props => props.showInvalidation ? "red" : props.theme.two};
    border-radius: 0.5em;
    outline: none;

    ::placeholder {
        color: ${props => lighten(0.5)(props.theme.three)};
        font-style: italic;
    }
`;
