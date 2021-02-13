import { FC } from "react";
import styled, { CSSProperties } from "styled-components";

interface StyleProps {
    alignContent?: CSSProperties["alignContent"];
    alignItems?: CSSProperties["alignItems"];
    alignSelf?: CSSProperties["alignSelf"];
    flexBasis?: CSSProperties["flexBasis"];
    flexDirection?: CSSProperties["flexDirection"];
    flexGrow?: CSSProperties["flexGrow"];
    flexShrink?: CSSProperties["flexShrink"];
    flexWrap?: CSSProperties["flexWrap"];
    height?: CSSProperties["height"];
    justifyContent?: CSSProperties["justifyContent"];
    justifyItems?: CSSProperties["justifyItems"];
    justifySelf?: CSSProperties["justifySelf"];
    width?: CSSProperties["width"];
}

interface Props extends StyleProps {
}

const FlexContainer = styled.div<StyleProps>`
    display: flex;
    ${props => props.alignContent && `align-content: ${props.alignContent};`}
    ${props => props.alignItems && `align-items: ${props.alignItems};`}
    ${props => props.alignSelf && `align-self: ${props.alignSelf};`}
    ${props => props.flexBasis && `flex-basis: ${props.flexBasis};`}
    ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`}
    ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`}
    ${props => props.flexShrink && `flex-shrink: ${props.flexShrink};`}
    ${props => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
    ${props => props.height && `height: ${props.height};`}
    ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}
    ${props => props.justifyItems && `justify-items: ${props.justifyItems};`}
    ${props => props.justifySelf && `justify-self: ${props.justifySelf};`}
    ${props => props.width && `width: ${props.width};`}
`;

/**
 * An abstraction for a flex container.
 * This component restricts the available flex property set. For example, the shorthand property `flex` is not supported due
 * how semantics have changed in time over browsers and versions; it is better to specifiy basis, grow, and shrink explicitly.
 */
export const Flex: FC<Props> = props => {
    return (
        <FlexContainer {...props}>
            {props.children}
        </FlexContainer>
    );
};
