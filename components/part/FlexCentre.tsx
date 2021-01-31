import { FC } from "react";
import styled from "styled-components";

const FlexCentreContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FlexCentre: FC = props => {
    return (
        <FlexCentreContainer>
            {props.children}
        </FlexCentreContainer>
    );
};
