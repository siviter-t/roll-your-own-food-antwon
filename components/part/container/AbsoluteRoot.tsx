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

const AbsoluteRootContainer = styled.div<StyleProps>`
    position: absolute;
    ${props => props.bottom && `bottom: ${props.bottom};`}
    ${props => `height: ${props.height ? props.height : "100%"};`}
    ${props => props.left && `left: ${props.left};`}
    ${props => props.right && `right: ${props.right};`}
    ${props => props.top && `top: ${props.top};`}
    ${props => `width: ${props.width ? props.width : "100%"};`}
    ${props => props.zIndex && `z-index: ${props.zIndex};`}
`;

export const AbsoluteRoot: FC<Props> = props => {
    return (
        <AbsoluteRootContainer {...props}>
            {props.children}
        </AbsoluteRootContainer>
    );
};
