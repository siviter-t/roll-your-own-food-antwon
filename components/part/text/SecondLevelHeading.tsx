import { FC } from "react";
import styled from "styled-components";

const SecondLevelHeadingContainer = styled.h2`
    line-height: 2em;
    font-size: 1.8em;
    letter-spacing: -0.04em;
`;

export const SecondLevelHeading: FC = props => {
    return (
        <SecondLevelHeadingContainer>
            {props.children}
        </SecondLevelHeadingContainer>
    );
};
