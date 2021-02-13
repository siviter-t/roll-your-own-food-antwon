import { FC } from "react";
import styled, { CSSProperties } from "styled-components";

interface StyleProps {
    height?: CSSProperties["height"];
    width?: CSSProperties["width"];
    zIndex?: CSSProperties["zIndex"];
}

interface Props extends StyleProps {
}

const RelativeRootContainer = styled.div<StyleProps>`
    position: relative;
    ${props => `height: ${props.height ? props.height : "100%"};`}
    ${props => `width: ${props.width ? props.width : "100%"};`}
    ${props => props.zIndex && `z-index: ${props.zIndex};`}
`;

export const RelativeRoot: FC<Props> = props => {
    return (
        <RelativeRootContainer {...props}>
            {props.children}
        </RelativeRootContainer>
    );
};
