import { FC } from "react";
import styled,{ CSSProperties } from "styled-components";

interface StyleProps {
    height?: CSSProperties["height"];
    mainAxisContentAlignment?: CSSProperties["justifyContent"];
    crossAxisContentAlignment?: CSSProperties["alignContent"];
}

interface Props extends StyleProps {
}

const TilesContainer = styled.div<StyleProps>`
    display: flex;
    flex-wrap: wrap;

    ${props => props.height && `height: ${props.height};`}
    ${props => props.mainAxisContentAlignment && `justify-content: ${props.mainAxisContentAlignment};`}
    ${props => props.crossAxisContentAlignment && `align-content: ${props.crossAxisContentAlignment};`}
`;

export const Tiles: FC<Props> = props => {
    return (
        <TilesContainer {...props}>
            {props.children}
        </TilesContainer>
    );
};
