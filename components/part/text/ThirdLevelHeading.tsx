import { FC } from "react";
import styled from "styled-components";

const ThirdLevelHeadingContainer = styled.h1`
    line-height: 2em;
    font-size: 1.2em;
    letter-spacing: -0.04em;
`;

export const ThirdLevelHeading: FC = props => {
    return (
        <ThirdLevelHeadingContainer {...props}>
            {props.children}
        </ThirdLevelHeadingContainer>
    );
};
