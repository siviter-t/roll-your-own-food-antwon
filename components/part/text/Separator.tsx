import { FC } from "react";
import styled from "styled-components";

const SeparatorContainer = styled.span`
    margin: 0 0.6em;
`;

export const Separator: FC = () => {
    return (
        <SeparatorContainer>•</SeparatorContainer>
    );
};
