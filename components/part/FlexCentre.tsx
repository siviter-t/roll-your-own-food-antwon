import { FC } from "react";
import styled, { CSSProperties } from "styled-components";

interface StyleProps {
    height?: CSSProperties["height"];
}

interface Props extends StyleProps {
}

const FlexCentreContainer = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.height && `height: ${props.height};`}
`;

export const FlexCentre: FC<Props> = props => {
    return (
        <FlexCentreContainer {...props}>
            {props.children}
        </FlexCentreContainer>
    );
};
