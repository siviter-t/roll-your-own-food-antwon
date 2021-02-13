import { FC } from "react";
import styled, { CSSProperties } from "styled-components";

interface StyleProps {
    bottom?: CSSProperties["bottom"];
    height?: CSSProperties["height"];
    left?: CSSProperties["left"];
    right?: CSSProperties["right"];
    top?: CSSProperties["top"];
    width?: CSSProperties["width"];
    zIndex?: CSSProperties["zIndex"];
}

interface Props extends StyleProps {
}

const RelativeRootContainer = styled.div<StyleProps>`
    position: relative;
    ${props => props.bottom && `bottom: ${props.bottom};`}
    ${props => `height: ${props.height ? props.height : "100%"};`}
    ${props => props.left && `left: ${props.left};`}
    ${props => props.right && `right: ${props.right};`}
    ${props => props.top && `top: ${props.top};`}
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
