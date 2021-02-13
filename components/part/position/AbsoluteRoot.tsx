import { FC } from "react";
import styled, { CSSProperties } from "styled-components";

interface StyleProps {
    height?: CSSProperties["height"];
    width?: CSSProperties["width"];
    zIndex?: CSSProperties["zIndex"];
}

interface Props extends StyleProps {
}

const AbsoluteRootContainer = styled.div<StyleProps>`
    position: absolute;
    ${props => `height: ${props.height ? props.height : "100%"};`}
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
