import { FC } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const SpinnerContainer = styled.svg.attrs({
    width: 30,
    height: 30,
    viewBox: "0 0 30 30"
})`
    animation: ${rotate} 2s linear infinite;

    & path.one {
        fill: ${props => props.theme.two};
    }
    & path.two {
        fill: ${props => props.theme.three};
    }
    & path.three {
        fill: ${props => props.theme.four};
    }
`;

export const Spinner: FC = () => {
    return (
        <SpinnerContainer>
            <path d="M14.363 13.607l-4.317-.878-3.171 3.058-.499-4.377-3.888-2.07 4.008-1.828.768-4.338 2.977 3.248 4.363-.61-2.17 3.834z" className="one" />
            <path d="M20.797 14.133l-1.781-2.9-3.399-.177 2.208-2.59-.882-3.286 3.145 1.299 2.853-1.855-.263 3.393 2.645 2.14-3.308.798z" className="two" />
            <path d="M21.12 26.27l-5.447-2.316-4.995 3.174.52-5.895-4.563-3.77 5.767-1.328 2.176-5.504 3.045 5.075 5.906.368-3.885 4.464z" className="three" />
        </SpinnerContainer>
    );
};
