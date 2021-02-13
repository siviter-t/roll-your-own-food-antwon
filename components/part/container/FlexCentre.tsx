import { FC } from "react";
import { CSSProperties } from "styled-components";
import { Flex } from "components/part/container/Flex";

interface StyleProps {
    flexDirection?: CSSProperties["flexDirection"];
}

interface Props extends StyleProps {
}

/**
 * This component, like a fluid, attempts to expand into its available space and centres any children using Flex.
 */
export const FlexCentre: FC<Props> = props => {
    return (
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%" {...props}>
            {props.children}
        </Flex>
    );
};
