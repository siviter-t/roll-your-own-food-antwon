import { FC } from "react";
import styled from "styled-components";

const TilesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Tiles: FC = props => {
    return (
        <TilesContainer>
            {props.children}
        </TilesContainer>
    );
};
