import { FC } from "react";
import styled, { CSSProperties } from "styled-components";

interface StyleProps {
    flexDirection?: CSSProperties["flexDirection"];
    height?: CSSProperties["height"];
    width?: CSSProperties["width"];
}

interface Props extends StyleProps {
}

const FlexCentreContainer = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`}
    ${props => `height: ${props.height ? props.height : "100%"};`}
    ${props => `width: ${props.width ? props.width : "100%"};`}
`;

export const FlexCentre: FC<Props> = props => {
    return (
        <FlexCentreContainer {...props}>
            {props.children}
        </FlexCentreContainer>
    );
};
