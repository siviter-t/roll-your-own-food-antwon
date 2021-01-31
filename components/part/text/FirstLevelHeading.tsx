import { FC } from "react";
import styled from "styled-components";

const FirstLevelHeadingContainer = styled.h1`
    line-height: 2em;
    font-size: 2.5em;
    letter-spacing: -0.04em;
`;

export const FirstLevelHeading: FC = props => {
    return (
        <FirstLevelHeadingContainer>
            {props.children}
        </FirstLevelHeadingContainer>
    );
};
