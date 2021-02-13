import { isNil } from "lodash";
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
    ${props => !isNil(props.bottom) && `bottom: ${props.bottom};`}
    ${props => `height: ${!isNil(props.height) ? props.height : "100%"};`}
    ${props => !isNil(props.left) && `left: ${props.left};`}
    ${props => !isNil(props.right) && `right: ${props.right};`}
    ${props => !isNil(props.top) && `top: ${props.top};`}
    ${props => `width: ${!isNil(props.width) ? props.width : "100%"};`}
    ${props => !isNil(props.zIndex) && `z-index: ${props.zIndex};`}
`;

export const RelativeRoot: FC<Props> = props => {
    return (
        <RelativeRootContainer {...props}>
            {props.children}
        </RelativeRootContainer>
    );
};
